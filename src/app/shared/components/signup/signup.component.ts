import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpserviceService } from 'src/app/core/Services/httpservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signupform!:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpserviceService){

  }
  ngOnInit(): void {
    this. signupform = this.fb.group({
      "fullname":['',[]],
      "mobile":['',[]],
      "email":['',[]],
      "password":['',[]],
    })  
  }

  postsignupdetails(){
    this.http.postdatatoserver('userdetails',this.signupform.value).subscribe((el:any)=>{
       console.log(el)
    },
    (error:any)=>{

    })
  }

}







