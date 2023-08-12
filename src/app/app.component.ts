import { Component } from '@angular/core';
import { TriviaApiService } from './api/trivia-api.service'
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
  constructor(private triviaService:  TriviaApiService, private messageService: MessageService){}

  ngOnInit() {
    this.retrieveQuestionSetList()
  }

  retrieveQuestionSetList(){
    this.triviaService.getQuestionSetList().subscribe((qs: QuestionSet[]) => {
      this.qsList = qs;
    console.log(this.qsList)
    });
  }

  showDialog() {
    this.displayDialog = true;
  }

  onConfirm() {
    
    this.triviaService.postQuestionSet(this.creatingQs).subscribe(
      (response) => {
        console.log('Success:', response);
       
        this.qsList.push(this.creatingQs)
        this.displayDialog = false;
      },
      (error) => {
        console.error('Error:', error);
        this.messageService.add({
          severity: "error",
          summary: "Error creating question set",
          detail: error['error']['message'],
        });
      }
    );

    
  }

  onCancel() {
    
    this.displayDialog = false;
  }

  removeQs(qs: QuestionSet){
    this.triviaService.deleteQuestionSet(qs).subscribe({
      next: (v) => console.log(v),
      error: (e) => this.messageService.add({
        severity: "error",
        summary: "Error deleting question set",
        detail: e['message'],
      }),

      complete: () =>  this.messageService.add({
        severity: "success",
        summary: "Deleted "+qs.setName,
        detail: "",
      }) 
    })

    const index = this.qsList.indexOf(qs);
    if (index !== -1) {
      this.qsList.splice(index, 1);
    }
  }
}
