import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpserviceService } from 'src/app/core/Services/httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpserviceService){

  }
  
  ngOnInit(): void {
   this.fb.group({
    "username":['',[]],
    "password":['',[]]
   })
  }

}
