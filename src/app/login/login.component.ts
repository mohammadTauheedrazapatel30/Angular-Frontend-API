import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logincredentials = {
    username : '',
    password : ''
  }

  constructor(private loginService : LoginService) { }

  onSubmit(){
    if(this.logincredentials.username !='' && this.logincredentials.password !=''){
        console.log("We have submitted !")

        //passing the credentials
        this.loginService.doLogin(this.logincredentials).subscribe(
          response=>{
            // when successfully logged in
            console.log(response)
          },
          errors=>{

            console.log(errors)
          }
        )
    }else{
      console.log("Field are empty !!");
    }
  }

  ngOnInit(): void {
  }

}
