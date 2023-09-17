import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { HttpserviceService } from 'src/app/core/Services/httpservice.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
  userexits:boolean=false;

  @Output() emitAction:EventEmitter<any> = new EventEmitter()

  signup(){
    this.emitAction.emit('Sign-Up')
  }

  constructor(private fb:FormBuilder,private http:HttpserviceService,private login:LoginService){

  }
  
  ngOnInit(){
   this.loginform = this.fb.group({
    "mobile":['',[]],
    "password":['',[]]
   });
  }

  validate() {
    console.log(this.loginform.value)
    const endpoint = "userdetails?mobile="+this.loginform.get('mobile')?.value+"&password="+this.loginform.get('password')?.value;
    this.http.getDataFromServer(endpoint).subscribe((response: any) => {
      if (response && response.length > 0) {
        this.userexits = false;
        const token = "sgchjsgc565";
        localStorage.setItem("token",token);
        this.login.adduser(response[0]);
        alert("Login Succesfull")
        this.emitAction.emit("LOGIN-SUCCESS")
      } else {
        this.userexits = true;
      }
    })
  }
}

