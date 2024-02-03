import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../env/environment';
import {QuestionSet} from '../shared/QuestionSet'
import {Category} from "../shared/Category";
import {Question} from "../shared/Question";

@Injectable({
  providedIn: 'root'
})
export class TriviaApiService {


  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
    // Altre intestazioni personalizzate se necessario
  });
  getQuestionSetList(): Observable<QuestionSet[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/questionset`).pipe(
      map((data: any[]) => {
       return data.map((qs: any) => ({

          id: qs.id,
          setName: qs.set_name,
          description: qs.description
        }));
      })
    );
  }

  postQuestionSet(qs: QuestionSet): Observable<any> {
    const url = `${environment.apiUrl}/questionset`; // Sostituisci 'endpoint' con l'endpoint corretto dell'API

    // Imposta le intestazioni della richiesta (se necessario)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Altre intestazioni personalizzate se necessario
    });

    const requestBody = {
      setName: qs.setName,
      description: qs.description
    };

    return this.http.post(url, requestBody, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }

  deleteQuestionSet(qs: QuestionSet): Observable<any> {

    return this.http.delete<any[]>(`${environment.apiUrl}/questionset/${qs.setName}`).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

  //CATEGORY

  getCategoryList(qsName: string): Observable<Category[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/${qsName}/category`).pipe(
      map((data: any[]) => {
        return data.map((c: any) => ({

          categoryName: c.category_name,
          description: c.description,
          questionSet: qsName
        }));
      })
    );
  }

  postCategory(c: Category, qs: String): Observable<any> {
    const url = `${environment.apiUrl}/${qs}/category`; // Sostituisci 'endpoint' con l'endpoint corretto dell'API

    // Imposta le intestazioni della richiesta (se necessario)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Altre intestazioni personalizzate se necessario
    });

    const requestBody = {
      categoryName: c.categoryName,
      description: c.description
    };

    return this.http.post(url, requestBody, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }

  updateCategory(c: Category, qs: String, oldCategoryName: String): Observable<any> {
    const url = `${environment.apiUrl}/${qs}/category/${oldCategoryName}`; // Sostituisci 'endpoint' con l'endpoint corretto dell'API

    // Imposta le intestazioni della richiesta (se necessario)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Altre intestazioni personalizzate se necessario
    });

    const requestBody = {
      categoryName: c.categoryName,
      description: c.description
    };

    return this.http.put(url, requestBody, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }


  deleteCategory(qs: String, categoryName: String): Observable<any> {

    return this.http.delete<any[]>(`${environment.apiUrl}/${qs}/category/${categoryName}`).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }


  postAnswer(answer: String, uuid: String): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Altre intestazioni personalizzate se necessario
    });

    const requestBody = {
      "guess": answer
    };

    return this.http.post<any[]>(`${environment.apiUrl}/question/${uuid}/answer`, requestBody, {headers}).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

  getQuestionList(qsName: string, category: string): Observable<Question[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/question/?categoryName=${category}&questionSet=${qsName}`).pipe(
      map((data: any[]) => {
        return data.map((c: any) => ({
          questionTitle: c.question_title,
          categoryName: c.category_name,
          uuid: c.uuid,
          optionList: c.option_list
        }));
      })
    );
  }
}
