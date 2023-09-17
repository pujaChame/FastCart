import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('closebtn') closebtn!:ElementRef<any>;

  constructor(private login:LoginService){}

  argumentsvalue:string="";
  userdetailsobj:any;

  arguments(data:string){
    this.argumentsvalue=data;
  }

  getData(event:any){
    this.argumentsvalue=event;
    if(this.argumentsvalue == 'LOGIN-SUCCESS'){
      this.closePopup();
      this.userdetailsobj = this.login.getuser();
      console.log(this.userdetailsobj);
    }
    console.log(this.argumentsvalue)
  }

  ngAfterViewInit(){
    console.log(this.closebtn.nativeElement.click())
  }

  closePopup(){
    if(this.closebtn && this.closebtn.nativeElement){
      this.closebtn.nativeElement.click();
    }
  }
  logout(){
    this.argumentsvalue != 'LOGIN_SUCCESS';
    localStorage.removeItem("token");
    localStorage.removeItem("UserInfo")
  }
}
