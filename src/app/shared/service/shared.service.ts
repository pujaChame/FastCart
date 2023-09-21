import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  cartcount:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartcountobs$ = this.cartcount.asObservable();

  emitcartcount(count:number){
    this.cartcount.next(count)

  }
}
