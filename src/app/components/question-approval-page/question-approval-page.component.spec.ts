import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionApprovalPageComponent } from './question-approval-page.component';

describe('QuestionApprovalPageComponent', () => {
  let component: QuestionApprovalPageComponent;
  let fixture: ComponentFixture<QuestionApprovalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionApprovalPageComponent ]
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
