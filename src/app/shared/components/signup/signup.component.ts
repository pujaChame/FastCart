import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber, Subscription, interval } from 'rxjs';
import { HttpserviceService } from 'src/app/core/Services/httpservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupform!:FormGroup;
  otpflag:boolean=false;
  randomotp!:number;
  timerotp:number|undefined;
  sub!:Subscription;
  otpverified:boolean=false;

  @Output() emitAction:EventEmitter<any> = new EventEmitter()

  login(){
    this.emitAction.emit('Log-In')
  }

  constructor(private fb:FormBuilder,private http:HttpserviceService){

  }
  ngOnInit(): void {
    this. signupform = this.fb.group({
      "fullname":['',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('[a-zA-Z ]{2,20}')]],
      "mobile":['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10,10}')]],
      "email":['',[]],
      "password":['',[]],
      "otpenterd":['',[]],
      "otpverified":['false',[]],
    })    
  }

  postsignupdetails(){
    const isotpverified = this.signupform.get('otpverified')?.value;
    if(isotpverified == true){
      this.http.postdatatoserver('userdetails',this.signupform.value).subscribe((el:any)=>{
        alert("Registration Succesfull")
      },
      (error:any)=>{
      })
    }
  }

  otp(){
    if(this.signupform.get('mobile')?.valid){
      this.otpflag=true;
      this.randomotp = Math.floor(100000 + Math.random() * 900000)
      console.log(this.randomotp)
      this.sub = interval(1000).subscribe((el:any)=>{
        if((el && el < 61) || (el == 0)){
          this.timerotp = 60-el;
        } else {
          this.sub.unsubscribe();
          this.otpflag=false;
          this.timerotp=undefined;
        }
      })
    }
  }

  verified(){
    if(this.randomotp == this.signupform.get('otpenterd')?.value){
      this.otpflag=false;
      this.sub.unsubscribe();
      this.timerotp=undefined;
      this.otpverified=false;
      this.signupform.get('otpverified')?.setValue(true);
    } else {
      this.otpverified=true;
    }
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

}







