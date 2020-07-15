import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionServiceStub } from 'src/testing/question.service.stub';
import { QuestionApprovalPageComponent } from './question-approval-page.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';
import { KatexModule } from 'ng-katex';

describe('QuestionApprovalPageComponent', () => {
  let component: QuestionApprovalPageComponent;
  let fixture: ComponentFixture<QuestionApprovalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionApprovalPageComponent],
      imports: [ClarityModule,
        ReactiveFormsModule,
        KatexModule]
    }).overrideComponent(QuestionApprovalPageComponent, {
      set: {
        providers: [
          { provide: QuestionService, useValue: QuestionServiceStub }
        ]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionApprovalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
