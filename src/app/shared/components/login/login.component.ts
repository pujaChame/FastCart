import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm! : FormGroup;

  constructor(private http:HttpService, private fb:FormBuilder){

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
      console.log(el)
    },
    (error:any)=>{
      error;
    })
  }
}
