import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerBoxComponent } from './answer-box.component';

describe('AnswerBoxComponent', () => {
  let component: AnswerBoxComponent;
  let fixture: ComponentFixture<AnswerBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerBoxComponent]
    });
    fixture = TestBed.createComponent(AnswerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
