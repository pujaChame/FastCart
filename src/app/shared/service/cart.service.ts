import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartArr:any=[];

  constructor(private shared:SharedService) { }

  addItemToCart(item:any){
    this.cartArr.push(item);
    localStorage.setItem("cartsItem",JSON.stringify(this.cartArr));
    this.shared.emitcartcount(this.cartArr.length)
  }

  getcartdata(){
    var cartitem = [];
    let cartdata = localStorage.getItem("cartsItem");
    if(cartdata){
      cartitem =JSON.parse(cartdata);
      return cartitem
    }
  }
}
