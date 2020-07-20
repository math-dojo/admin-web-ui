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
  question: QuestionDto ;
  exampleForm = new FormGroup({
    sample: new FormControl(''),
  });
  constructor(
    private questionService: QuestionService,
  ) { }
// think about how to deal with multiple people accessing the queue and what happens to dequeued question in limbo
  ngOnInit(): void {

    this.questionService.getQuestionFromQueue().
    subscribe(queue => this.question = new QuestionDto(JSON.parse(queue.messageText)));
    console.log("here");
  }
  reject(): void {
    this.questionService.getQuestionFromQueue().subscribe(queue => this.question = new QuestionDto(JSON.parse(queue.messageText)));
    
  }
  approve(): void {
    this.questionService.postQuestion(this.question);
    this.questionService.getQuestionFromQueue().subscribe(queue => this.question = new QuestionDto(JSON.parse(queue.messageText)));
  }



}
