import { Component } from '@angular/core';
import {QuestionSet} from "../shared/QuestionSet";
import {Message, MessageService} from "primeng/api";
import {TriviaApiService} from "../api/trivia-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questionset-page',
  templateUrl: './questionset-page.component.html',
  styleUrls: ['./questionset-page.component.css']
})
export class QuestionsetPageComponent {
  title = 'triviaApp-angular';
  qsList: QuestionSet[] = [];
  displayDialog: boolean = false;
  creatingQs: QuestionSet = { id:0, setName: '', description: '' };
  errorMessages: Message[] = []
  constructor(private triviaService:  TriviaApiService, private messageService: MessageService, private router: Router){}

  ngOnInit() {
    this.retrieveQuestionSetList()
  }

  goToCategory(qs: string){

    this.router.navigate([qs,'category']).then();

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
