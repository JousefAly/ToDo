import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ToDo } from './ToDo';

@Injectable({
    providedIn: 'root',
    
  })
export class TodoService {

  private apiUrl = "https://localhost:7234"
  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]> {
      return this.http.get<ToDo[]>(`${this.apiUrl}/ToDos`).pipe(
        map((response: any[]) => {
          return response.map( item => ({
            Id: item.id,
            Text: item.text
          }));
        })
      );
    }

}