import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './services.component';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(public http: HttpClient) { }

  addTodo(todo:Todo):Observable<Todo>{

    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos',todo)

  }

  deleteTodo(id:number){
   return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  fetchTodo(){
   return  this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').pipe(delay(1500))
  }

  completeTodo(id: number){
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed:true} )
  }

}
