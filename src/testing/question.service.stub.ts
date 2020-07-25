import { of } from 'rxjs';
import { QuestionQueueDto } from '../app/models/question-queue-dto';
import { QuestionService } from '../app/services/question.service';

export const QuestionServiceStub: Partial<QuestionService> = {
    getQuestionFromQueue: jasmine.createSpy('getQuestionFromQueue')
    .and.returnValue(of(new QuestionQueueDto({ messageText :'{"id":"try-me-first","questionTitle":"try-me-first","title":"try-me-first","questionBody":"something quite complex","sampleAnswer":"42","successRate":4,"difficulty":"easy","hints":["try this","watch space odyssey"],"parentTopicTitle":"pure-mathematics","questionAnswerOptions":["choose me","me too","que no se te olvide que estoy"]}' })))

};
