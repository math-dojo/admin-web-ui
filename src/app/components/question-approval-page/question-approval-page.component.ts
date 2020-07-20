import { Component, OnInit } from '@angular/core';
import { QuestionDto } from 'src/app/models/question-dto';
import { QuestionService } from 'src/app/services/question.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-question-approval-page',
  templateUrl: './question-approval-page.component.html',
  styleUrls: ['./question-approval-page.component.scss']
})
export class QuestionApprovalPageComponent implements OnInit {
  question: QuestionDto =  QuestionDto.createDtoWithNonEmptyFields();
  exampleForm = new FormGroup({
    sample: new FormControl(''),
  });
  constructor(
    private questionService: QuestionService,
  ) { }
// maybe add put back button for concurrency issues. also add checks against approval 
  ngOnInit(): void {

    this.questionService.getQuestionFromQueue().
    subscribe(queue => this.question = new QuestionDto(JSON.parse(queue.messageText)));
  }
  reject(): void {
    this.questionService.getQuestionFromQueue().subscribe(queue => this.question = new QuestionDto(JSON.parse(queue.messageText)));

  }
  approve(): void {
    this.questionService.postQuestion(this.question);
    this.questionService.getQuestionFromQueue().subscribe(queue => this.question = new QuestionDto(JSON.parse(queue.messageText)));
  }



}
