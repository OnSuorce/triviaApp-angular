import { Component } from '@angular/core';
import { TriviaApiService } from './api/trivia-api.service'
import { QuestionSet } from './shared/QuestionSet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triviaApp-angular';
  qsList: QuestionSet[] = [];

  constructor(private triviaService:  TriviaApiService){}

  ngOnInit() {
    this.triviaService.getData().subscribe((qs: QuestionSet[]) => {
      this.qsList = qs;
    console.log(this.qsList)
    });
  }
}
