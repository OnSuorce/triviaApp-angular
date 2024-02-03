import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {AnswerBoxComponent} from "../answer-box/answer-box.component";
import {Question} from "../shared/Question";
import {TriviaApiService} from "../api/trivia-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-list-page',
  templateUrl: './question-list-page.component.html',
  styleUrls: ['./question-list-page.component.css'],
  providers: [DialogService]
})
export class QuestionListPageComponent implements OnInit{
  items: MenuItem[];
  questions: Question[] = new Array();
  private qsName: string  = "";
  private category: string  = "";
  constructor(private messageService: MessageService,
              private dialogService: DialogService,
              private triviaService: TriviaApiService,
              private route: ActivatedRoute) {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => {
          this.update();
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.delete();
        }
      }
    ];
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.qsName = <string>params.get('qs');
      this.category = <string>params.get('categoryName');
    });




    this.triviaService.getQuestionList(this.qsName, this.category).subscribe({
      next: (v) => this.questions = v,
      error: (e) => this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: e['message'],
      })
    })


  }

  openModal() {

  }

  save(info: string) {

  }

  private update() {

  }

  private delete() {

  }

  openDialog(question: Question) {
    const ref = this.dialogService.open(AnswerBoxComponent, {
      data: {
        question: question
      }
    });
  }
}
