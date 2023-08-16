import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryPageComponent} from "./category-page/category-page.component";
import {QuestionsetPageComponent} from "./questionset-page/questionset-page.component";


const routes: Routes = [
  { path: 'home', component: QuestionsetPageComponent },
  { path: ':qs/category', component: CategoryPageComponent },
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
