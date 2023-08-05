import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../env/environment';
import {QuestionSet} from '../shared/QuestionSet'

@Injectable({
  providedIn: 'root'
})
export class TriviaApiService {

  constructor(private http: HttpClient) {}

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

}
