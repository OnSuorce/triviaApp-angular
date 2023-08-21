import { Component } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-answer-box',
  templateUrl: './answer-box.component.html',
  styleUrls: ['./answer-box.component.css']
})
export class AnswerBoxComponent {
  question: any;
  guessed: boolean | null = null
  selectedOptionIndex: number | null = null;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.question = config.data.question;
  }

  isCorrectOption(option: number | null): boolean {
    return true;
  }

  selectOption(index: number): void {
    this.selectedOptionIndex = index;
  }

  onQuestionClick(): void {
    if (this.selectedOptionIndex !== null && this.isCorrectOption(this.question.options[this.selectedOptionIndex])) {

    }
  }


}
