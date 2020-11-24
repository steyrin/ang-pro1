import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';

export interface Todo {
  completed: boolean;
  title: string;
  id?:number;

}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  todos: Todo[]=[];

  todoTitle:string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').subscribe(todos =>{
      this.todos = todos
    });

  }

  addTitle() {
    if (!this.todoTitle.trim())
    {
      return
    }

    const newTodo: Todo = {

      title: this.todoTitle,
      completed: false
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos',newTodo).subscribe(todo =>{
      this.todos.push(todo);
    })

  }

  delete(id:number) {

    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe( () => {
        this.todos = this.todos.filter( t=> t.id !== id)
      })

  }
}
