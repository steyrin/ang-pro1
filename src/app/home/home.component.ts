import { Component, Input } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeContent: string;

  constructor( public AdminCheck: AuthServiceService) {
  }

  ngOnInit(): void {
  }

  update():void{

    this.AdminCheck.home = this.homeContent;

  }

}
