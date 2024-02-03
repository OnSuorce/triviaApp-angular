import { Component } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {TriviaApiService} from "../api/trivia-api.service";
import {Question} from "../shared/Question";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-answer-box',
  templateUrl: './answer-box.component.html',
  styleUrls: ['./answer-box.component.css']
})
export class AnswerBoxComponent {
  question: Question;
  guessed: boolean | null = null
  selectedOptionIndex: number | null = null;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private triviaApi: TriviaApiService
  ) {
    this.question = config.data.question;
  }
  optionSelected: any;

  isOptionCorrect: boolean | null = null;

  selectOption(option: string) {
    this.isCorrect(option).subscribe( {

      next: value => {
        this.optionSelected = option;
        this.isOptionCorrect = value;
        console.log(value)
      }

      // Altre azioni in base al risultato
    });
  }

  isCorrect(option: any): Observable<boolean> {
    return this.triviaApi.postAnswer(option, this.question.uuid).pipe(
        map(value => value.matched )
    );
  }


}
