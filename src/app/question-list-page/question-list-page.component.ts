import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {AnswerBoxComponent} from "../answer-box/answer-box.component";

@Component({
  selector: 'app-question-list-page',
  templateUrl: './question-list-page.component.html',
  styleUrls: ['./question-list-page.component.css'],
  providers: [DialogService]
})
export class QuestionListPageComponent implements OnInit{
  items: MenuItem[];
  questions = [
    {
      text: 'Qual è la capitale dell\'Italia?',
      options: ['Roma', 'Milano', 'Firenze'],
      correctOption: 'Roma'
    },
    {
      text: 'Quale pianeta è noto come la "stella del mattino" o la "stella della sera"?',
      options: ['Marte', 'Venere', 'Giove'],
      correctOption: 'Venere'
    },
    {
      text: 'Quanto è 2 + 2?',
      options: ['3', '4', '5'],
      correctOption: '4'
    }
    // Aggiungi altre domande se necessario
  ];

  constructor(private messageService: MessageService, private dialogService: DialogService) {
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
  }

  openModal() {

  }

  save(info: string) {

  }

  private update() {

  }

  private delete() {

  }

  openDialog(question: any) {
    const ref = this.dialogService.open(AnswerBoxComponent, {
      data: {
        question: question
      }
    });
  }
}
