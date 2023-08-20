import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListPageComponent } from './question-list-page.component';

describe('QuestionListPageComponent', () => {
  let component: QuestionListPageComponent;
  let fixture: ComponentFixture<QuestionListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionListPageComponent]
    });
    fixture = TestBed.createComponent(QuestionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
