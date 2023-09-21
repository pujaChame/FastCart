import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../../service/shared.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('closebtn') closebtn!:ElementRef<any>;
    cartcountobj!:Observable<number>

  constructor(private login:LoginService,private router:Router,private shared:SharedService,private cart:CartService){}

  ngOnInit(): void {

   this.cartcountobj = this.shared.cartcountobs$;

   const userinfo =this.login.getuser();
   if(userinfo != null){
    this.userdetailsobj =userinfo;
    this.argumentsvalue = "LOGIN-SUCCESS";
   }

   const data = this.cart.getcartdata();
   if(data && data.length > 0){
    this.shared.emitcartcount(data.length);
   }
  }

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
  route(){
    if (this.argumentsvalue == 'LOGIN-SUCCESS') {
      this.router.navigate(['/my-cart']);
    } else {
      alert("Please login first!")
    }
  }
}
