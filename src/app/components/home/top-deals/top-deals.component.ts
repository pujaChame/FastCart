import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent {

  topDealsList : any = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


  constructor (private http:HttpService){

  }

  ngOnInit (){
    this.getTopDeals();
  }
  getTopDeals(){
    this.http.getDataFromServer('top-deals').subscribe((el:any)=>{
      
      this.topDealsList = el.products;
      console.log(el)
    },
    (error:any)=>{
      error;
    })
  }

  setTotalPrice(index:number, qty:any){
    this.topDealsList[index].w = qty.w;
    this.topDealsList[index].sp = qty.sp;
    console.log(qty.dis_val)
    this.topDealsList[index].dis_val = qty.dis_val;
  }
}
