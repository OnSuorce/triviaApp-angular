import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../env/environment';
import {QuestionSet} from '../shared/QuestionSet'

@Injectable({
  providedIn: 'root'
})
export class TriviaApiService {

  constructor(private http: HttpClient) {}

  getData(): Observable<QuestionSet[]> {
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

}
