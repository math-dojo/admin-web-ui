import { Component, OnInit } from '@angular/core';
import { QuestionDto } from 'src/app/models/question-dto';
import { QuestionService } from 'src/app/services/question.service';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-question-approval-page',
  templateUrl: './question-approval-page.component.html',
  styleUrls: ['./question-approval-page.component.scss']
})
export class QuestionApprovalPageComponent implements OnInit {
  question$: Observable<QuestionDto>;
  exampleForm = new FormGroup({
    sample: new FormControl(''),
  });
  constructor(
    private questionService: QuestionService,
  ) { }
  ngOnInit(): void {
    this.question$ = this.questionService.getQuestionFromQueue().pipe(
      map(questionFromQueue => questionFromQueue !== null ? new QuestionDto(JSON.parse(questionFromQueue.messageText))
      : new QuestionDto(QuestionDto.createDtoWithNonEmptyFields()))
      );
  }
  reject(): void {
    this.ngOnInit();
  }
  approve(): void {
    this.question$.subscribe(q =>  this.questionService.postQuestion(q));
  }



}
