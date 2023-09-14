import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { LoginService } from '../../services/login.service';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm! : FormGroup;
  newUser : boolean = false;

  constructor(private http:HttpService, private fb:FormBuilder, private loginService:LoginService){

  }

  @Output () emitAction : EventEmitter<string> = new EventEmitter();

  signUp(){
    this.emitAction.emit('Sign-Up');
  }

  ngOnInit(){
    this.form ();
  }

  form() {
    this.loginForm = this.fb.group({
      "email" : [],
      "password" : [],
    })
  }

  signIn(){
    const endPoint = "regUsers?email="+this.loginForm.value.email+"&password="+this.loginForm.value.password
    this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
      console.log(el);
      if (el && el.length>0){
        this.newUser = false;
        const token = "rhkewrewilrlal";
        localStorage.setItem("token",token);
        this.loginService.addUser(el[0])
        alert("You have succesfully loogged in!");
        this.emitAction.emit("LOGIN_SUCCESS")
      }
      else{
        this.newUser = true;
      }
    },
    (error:any)=>{
      error;
    })
  }
}
