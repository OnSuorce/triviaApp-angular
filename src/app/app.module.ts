import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { CategoryPageComponent } from './category-page/category-page.component';
import { QuestionsetPageComponent } from './questionset-page/questionset-page.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    QuestionsetPageComponent,
  ],
  imports: [
    ButtonModule,
    MenubarModule,
    MessagesModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    DialogModule,
    BrowserAnimationsModule,
    CardModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
