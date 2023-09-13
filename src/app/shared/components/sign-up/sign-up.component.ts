import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, interval } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  registrationForm!: FormGroup;

  generateOtp : boolean = false;
  otp! : number;
  otpTimer : number|undefined;
  sub! : Subscription;
  otpNotVerified : boolean = false;

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
      "mobile": [],
      "email": [],
      "password": [],
      "otpEntered" : [],
      "otpVerified": ['false']
    })
  }



  getOtp(){
    if(this.registrationForm.get('mobile')?.valid){

      this.generateOtp = true;
      this.otp = Math.floor(100000+Math.random()*900000);
      console.log("otp", this.otp);
      this.sub = interval(1000).subscribe((el:any)=>{
        if((el && el<31) || el == 0){
          this.otpTimer = 30 - el;
        }
        else {
          this.sub.unsubscribe();
          this.generateOtp = false;
          this.otpTimer = undefined;
        }
      })
    }
  }

  verifyOtp(){
    if(this.otp == this.registrationForm.get('otpEntered')?.value)
    {
      this.generateOtp = false;
      this.sub.unsubscribe();
      this.otpTimer = undefined;
      this.otpNotVerified = false;
      this.registrationForm.get('otpVerified')?.setValue(true);
    }
    else{
      this.otpNotVerified = true;
    }
    
  }

  regForm() {
    const isOtpVerified = this.registrationForm.get('otpVerified')?.value
    {
      if (isOtpVerified == true) {

        this.http.postDataToServer('regUsers', this.registrationForm.value).subscribe((el: any) => {
          console.log(el);
          alert("Registration succesful!")
          // console.log(this.registrationForm.errors)
        },
          (error: any) => {
            error;
          })
      }
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
