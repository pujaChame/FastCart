import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  registrationForm! : FormGroup;

  baseUrl : string = "http://localhost:3000/";

  constructor(private http:HttpService, private fb:FormBuilder){
    
  }

  ngOnInit(){
    this.form ();
  }

  form() {
    this.registrationForm = this.fb.group({
      "firstName" : ['',Validators.required, Validators.minLength(2), Validators.maxLength(16), Validators.pattern('[a-zA-Z]')],
      "lastName" : [],
      "address" : [],
      "occupation" : [],
      "mobile" : [],
      "email" : [],
      "password" : [],
    })
  }

  regForm(){
    this.http.postDataToServer('sign-up',this.registrationForm.value).subscribe((el:any)=>{
      console.log(el);
    },
    (error:any)=>{
      error;
    })
  }

}
