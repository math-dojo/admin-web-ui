import { of } from 'rxjs';
import { QuestionQueueDto } from '../app/models/question-queue-dto';
import { QuestionService } from '../app/services/question.service';

export const QuestionServiceStub: Partial<QuestionService> = {

    getQuestionFromQueue: jasmine.createSpy('getQuestionFromQueue')
    .and.returnValue(of(QuestionQueueDto.createDtoWithNonEmptyFields()))

};
