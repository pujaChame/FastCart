import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs';
import { HttpserviceService } from 'src/app/core/Services/httpservice.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  userdetailsobj:any;
  dataname!:string;
  editform!:FormGroup;
  otpflag:boolean=false;
  randomotp!:number;
  timerotp:number|undefined;
  sub!:Subscription;
  otpverified:boolean=false;
  password:boolean=false;

  constructor(private login:LoginService,private fb:FormBuilder,private http:HttpserviceService){

  }
  ngOnInit(): void {
    this.userdetailsobj = this.login.getuser();
    this.edit();
    this.editform.patchValue(this.userdetailsobj) 
  }

  edit(){
    this.editform = this.fb.group({
      "fullname":['',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('[a-zA-Z ]{2,20}')]],
      "mobile":['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10,10}')]],
      "email":['',[]],
      "password":['',[]],
      "otpenterd":['',[]],
      "otpverified":['false',[]],
    })    
  }

  name(data:string){
    this.dataname = data;
  }

  otp(){
    if(this.editform.get('mobile')?.valid){
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
    if(this.randomotp == this.editform.get('otpenterd')?.value){
      this.otpflag=false;
      this.sub.unsubscribe();
      this.timerotp=undefined;
      this.otpverified=false;
      this.editform.get('otpverified')?.setValue(true);
      this.editform.get('otpenterd')?.setValue('');
    } else {
      this.otpverified=true;
    }
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
      
    }
  }

  putdata(){
    const endpoint ="userdetails/"+this.userdetailsobj.id;
    this.http.putdatatoserver(endpoint,this.editform.value).subscribe((el:any)=>{
      alert("logout & login again to check changes!!")
    },
    (error:any)=>{

    })
  }

}
