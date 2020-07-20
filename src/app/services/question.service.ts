import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { QuestionDto } from '../models/question-dto';
import { QuestionQueueDto } from '../models/question-queue-dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }


  getQuestionFromQueue(): Observable<QuestionQueueDto> {
    return this.http.get<QuestionQueueDto>(`${
      environment.apis.queueServiceEndpoint
      }/dequeue-question`);
  }

  postQuestion(question: QuestionDto) {
    if (environment.name === 'default') {

    }
    this.http.post<QuestionDto>(`${
      environment.apis.questionServiceConsumerEndpoint
      }/questions`, question);
  }
}
