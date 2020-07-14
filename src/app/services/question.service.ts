import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { QuestionDto } from '../models/question-dto';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }


  private readonly preStashedQuestions = [
    new QuestionDto({
      title: 'try-me-first',
      questionBody: 'When $a \\ne 0$, the solution of $$(ax^2 + bx + c = 0)$$ is $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      sampleAnswer: '42',
      successRate: 0.42,
      difficulty: 'easy',
      answer: 'false',
      hints: ['try this', 'watch space odyssey'],
      parentTopicTitle: 'something-hard',
      questionAnswerOptions: ['choose me', 'me too', 'que no se te olvide que estoy'],
      solved: false
    }),
    new QuestionDto({
      title: 'other-thing-to-try',
      questionBody: '$\\sum_{i=1}^nx_i$',
      sampleAnswer: '42',
      successRate: 0.817563,
      difficulty: 'easy',
      answer: 'false',
      hints: ['try this', 'watch space odyssey'],
      parentTopicTitle: 'something-hard',
      questionAnswerOptions: ['choose me', 'me too', 'que no se te olvide que estoy'],
      solved: false
    }),
    new QuestionDto({
      title: 'final-on-the-list',
      questionBody: 'something quite complex',
      sampleAnswer: '42',
      successRate: 0.2,
      difficulty: 'easy',
      answer: 'false',
      hints: ['try this', 'watch space odyssey'],
      parentTopicTitle: 'something-hard',
      questionAnswerOptions: ['choose me', 'me too', 'que no se te olvide que estoy'],
      solved: false
    })
  ];
  defaultQuestions: QuestionDto[] = [this.preStashedQuestions[0], this.preStashedQuestions[1], this.preStashedQuestions[2],
   this.preStashedQuestions[0], this.preStashedQuestions[1]];
  getQuestionFromQueue(): Observable<QuestionDto> {
    if (environment.name === 'default') {
      return of(this.defaultQuestions.pop());
    }
    return this.http.get<QuestionDto>(`${
      environment.apis.queueServiceEndpoint
      }`);

  }

  postQuestion(question: QuestionDto) {
    if (environment.name === 'default') {
   
    }
    this.http.post<QuestionDto>(`${
      environment.apis.questionServiceConsumerEndpoint
      }/questions`, question);
  }
}
