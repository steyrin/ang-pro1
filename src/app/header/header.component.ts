import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public Role: AuthServiceService) {
  }
  home:string='Home';
  ngOnInit(): void {
  }


  logout() {
    console.log('logout');
    this.Role.authRole = 'Guest';
  }
}
