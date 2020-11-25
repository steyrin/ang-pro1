import { Component, OnInit } from '@angular/core';
import {HttpServicesService} from './http-services.service';

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

  loading:boolean = false;

  constructor(
    private httpService: HttpServicesService
  ) { }

  ngOnInit(): void {

    this.fetchTodo()

  }

  addTitle() {
    if (!this.todoTitle.trim())
    {
      return
    }

    this.httpService.addTodo({

      title: this.todoTitle,
      completed: false})
      .subscribe(todo =>{
      console.log(todo);
      this.todos.push(todo);
    })

  }

  complete(id:number) {
    this.httpService.completeTodo(id).subscribe(() => {
      this.todos.find(t => t.id === id).completed = true
    })

  }
  delete(id:number) {

   this.httpService.deleteTodo(id)
      .subscribe( respon => {
        console.log(respon);
        this.todos = this.todos.filter( t=> t.id !== id)
      })

  }

    fetchTodo() {
    this.loading=true;
    this.httpService.fetchTodo()
      .subscribe(todos=>{
      this.todos = todos
      this.loading= false;
    });

  }
}
