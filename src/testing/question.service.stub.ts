import { of } from 'rxjs';
import { QuestionDto } from '../app/models/question-dto';
import { QuestionService } from '../app/services/question.service';

export const QuestionServiceStub: Partial<QuestionService> = {

    getQuestionFromQueue: jasmine.createSpy('getQuestionFromQueue')
    .and.returnValue(of(QuestionDto.createDtoWithNonEmptyFields()))

};
