import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionDto } from 'src/app/models/question-dto';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-question-approval-page',
  templateUrl: './question-approval-page.component.html',
  styleUrls: ['./question-approval-page.component.scss']
})
export class QuestionApprovalPageComponent implements OnInit {
  questions: Observable<QuestionDto[]>;
  question: QuestionDto;
  index = 0;
  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required),
  });
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestionsForTopic();
  }

  onNext(): void {
    this.questions.subscribe(x => this.question = x[this.index++]);
  }
  onApprove(): void {
    // post to question service here
  }



}
