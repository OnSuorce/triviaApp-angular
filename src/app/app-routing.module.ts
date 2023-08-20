import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryPageComponent} from "./category-page/category-page.component";
import {QuestionsetPageComponent} from "./questionset-page/questionset-page.component";
import {QuestionListPageComponent} from "./question-list-page/question-list-page.component";


const routes: Routes = [
  { path: 'home', component: QuestionsetPageComponent },
  { path: ':qs/category', component: CategoryPageComponent },
  { path: ':qs/category/:categoryName/questions', component: QuestionListPageComponent},
  {
    path: "",
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
