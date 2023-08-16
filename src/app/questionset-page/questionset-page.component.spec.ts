import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsetPageComponent } from './questionset-page.component';

describe('QuestionsetPageComponent', () => {
  let component: QuestionsetPageComponent;
  let fixture: ComponentFixture<QuestionsetPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsetPageComponent]
    });
    fixture = TestBed.createComponent(QuestionsetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
