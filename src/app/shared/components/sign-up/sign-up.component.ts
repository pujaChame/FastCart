import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  registrationForm!: FormGroup;

  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpService, private fb: FormBuilder) {

  }

  @Output () emitAction : EventEmitter<string> = new EventEmitter();

  login(){
    this.emitAction.emit('Login')
  }

  ngOnInit() {
    this.form();
  }

  form() {
    this.registrationForm = this.fb.group({
      "firstName": ['',[Validators.required]],
      "lastName": [],
      "address": [],
      "occupation": [],
      "mobile": [],
      "email": [],
      "password": [],
    })
  }

  regForm() {
    this.http.postDataToServer('regUsers', this.registrationForm.value).subscribe((el: any) => {
      console.log(el);
      console.log(this.registrationForm.errors)
    },
      (error: any) => {
        error;
      })
  }

  

}
