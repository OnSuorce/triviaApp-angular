import { Component } from '@angular/core';
import { QuestionSet } from './shared/QuestionSet';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent {
  title = 'triviaApp-angular';
  qsList: QuestionSet[] = [];
  displayDialog: boolean = false;
  creatingQs: QuestionSet = { id:0, setName: '', description: '' };
  errorMessages: Message[] = []
  constructor(){}

  ngOnInit() {
  }
}
