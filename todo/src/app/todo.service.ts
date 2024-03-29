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

    addTodo(todo: ToDo): Observable<ToDo> {
      return this.http.post<ToDo>(`${this.apiUrl}/ToDos`, todo);
    }
   
    deleteTodo(id: number): Observable<void> {
      let urlPath = `${this.apiUrl}/ToDos/Delete/${id}`;
      return this.http.delete<void>(urlPath);
    }

    updateTodo(todo: ToDo): Observable<ToDo> {
      let urlPath = `${this.apiUrl}/ToDos/${todo.Id}`;
      return this.http.put<ToDo>(urlPath, todo);
    }

}