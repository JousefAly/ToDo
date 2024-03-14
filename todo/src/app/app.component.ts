import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  todos: any[] = [];
  title = 'todo';
  formData = {
    Text :''
  }

  private apiUrl = "https://localhost:7234"
  constructor(private http: HttpClient) { }

  getTodos(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/ToDos`);
    }

  ngOnInit(): void {
    this.getTodos().subscribe(
      (data) => {
        this.todos = data;
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }


  onSubmit(form: any){
    if(form.valid)
    console.log("form submitted", this.formData)
    console.log(this.todos.length)
  }
}
