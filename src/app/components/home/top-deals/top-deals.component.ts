import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpserviceService } from 'src/app/core/Services/httpservice.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent {
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
        items: 5
      }
    },
    nav: true
  }

  Producttopdeals:any=[]
  constructor(private http:HttpserviceService){

  }

  ngOnInit(){
    this.gettopdetials()

  }
  gettopdetials() {
    this.http.getDataFromServer('top-deals').subscribe((el:any)=>{
      if(el && el.products && el.products.length > 0){
        this.Producttopdeals = el.products
        console.log(el.products)
      }
    },
    (el:any)=>{

    })
  }

  set(index:number,qty:any){
    this.Producttopdeals[index].w = qty.w,
    this.Producttopdeals[index].sp = qty.sp
  }


}
