import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registrationf',
  templateUrl: './registrationf.component.html',
  styleUrls: ['./registrationf.component.css']
})
export class RegistrationfComponent implements OnInit {
  user = new User();
  msg='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        this.msg="Registration successful";
        this._router.navigate([''])
      },
      error=>{
        console.log("exception occured");
        this.msg = error.error;
      }
    )
  }
  gotologin(){
    this._router.navigate([''])
  }

}
