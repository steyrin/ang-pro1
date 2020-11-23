import { Component, OnInit } from '@angular/core';
import  {AuthServiceService} from '../auth-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import validate = WebAssembly.validate;


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    public authService: AuthServiceService,
    private  location :Location
  ) { }

  form: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new  FormControl('',
        [Validators.email, Validators.required]),
      password: new FormControl( null,
        [Validators.minLength(3), Validators.required])
    } )
  }


  submit() {
    console.log()
    this.authService.userCheck(this.form.get('email').value, this.form.get('password').value);
    this.location.back();
  }
}
