import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo.service';
import { ToDo } from './ToDo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TodoService]
  
})
export class AppComponent {
  todos: ToDo[] = [];
  title = 'todo';
  formData: ToDo = {
    Id: 0,
    Text :''
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (data) => {
        this.todos = data;
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }


  onSubmit(form: any){
    if(form.valid){
      this.todoService.addTodo(this.formData).subscribe(
        todo => {
          console.log('Todo added:', todo);
          // Optionally, reset the form or do any other actions
        },
        error => {
          console.error('Error adding todo:', error);
        }
      );
    }
      
  }
}
