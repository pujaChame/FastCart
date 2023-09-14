import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn! : ElementRef<any>;
  
  constructor(private http: HttpService, private loginService:LoginService) {

  }
  ngOnInit(): void {
    const userInfo = this.loginService.getUser();
    if(userInfo != null){
      this.userDetailsObj = userInfo;
      this.actionName = "LOGIN_SUCCESS";  
    }
  }
  
  actionName : string="";
  userDetailsObj : any;

  triggerAction(name:string){
    this.actionName = name;
    
  }


  getData(data:string){
    this.actionName = data;
    if(this.actionName === "LOGIN_SUCCESS"){
      this.closePopup();
      this.userDetailsObj = this.loginService.getUser();
      console.log("userDetails",this.userDetailsObj);
    }
  }

  ngAfterViewInit(){
    console.log("Close Btn",this.closeBtn.nativeElement.click());
  }

  closePopup(){
    if(this.closeBtn && this.closeBtn.nativeElement){
      this.closeBtn.nativeElement.click();
    }
  }
  
  logout(){
    this.actionName = "";
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
  }
}
