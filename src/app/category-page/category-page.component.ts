import {Component, OnInit} from '@angular/core';
import {TriviaApiService} from "../api/trivia-api.service";
import {Category} from "../shared/Category";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "primeng/api";
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit{
  categories: Category[] = []
  qsName: string | any = null

  //Creation dialog
  displayDialog = false;

  categoryInMaking : Category = {categoryName:'', questionSet: this.qsName, description: ''}

  constructor(private apiService: TriviaApiService, private route: ActivatedRoute, private messageService: MessageService) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.qsName = params.get('qs');

    });

    this.getCategories()

  }

  getCategories(){
    if (this.qsName != null) {
      this.apiService.getCategoryList(this.qsName).subscribe({
        next: (v) => this.categories = v,
        error: (e) => this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: e['message'],
        })
      })
    }
  }



  showDialog() {
    this.displayDialog = true;

  }

  saveCategory() {
    // Esegui le azioni necessarie per salvare la categoria
    this.displayDialog = false;
  }

  cancelDialog() {
    this.displayDialog = false;
  }


  openCategory(){

  }

  confirmDialog() {

    this.apiService.postCategory(this.categoryInMaking, this.qsName).subscribe({

      next: () => console.log("Category created!"),
      error: (e) =>  this.messageService.add({
        severity: "error",
        summary: "Error creating category",
        detail: e['error']['message'],
      }),

      complete: () => {
        this.messageService.add({
          severity: "success",
          summary: "Category created!",
          detail: "",
        })
        this.categories.push(this.categoryInMaking)
      }
    })
  }

  deleteCategory(category: Category) {
    this.apiService.deleteCategory(this.qsName, category.categoryName).subscribe({
      error: (e) =>  this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: e['error']['message'],
      }),
      complete: () => {
        this.messageService.add({
          severity: "success",
          summary: "Category eliminated!",
          detail: "",
        })
        let index = this.categories.indexOf(category);
        if (index !== -1) {
          this.categories.splice(index, 1);
        }
      }
    })
  }
}
