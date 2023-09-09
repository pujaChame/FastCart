import { Component } from '@angular/core';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent {

  categoryList : any = [];

  constructor(private http:HttpService){

  }

  ngOnInit(){
    this.getCategory();
  }
  getCategory() {
    this.http.getDataFromServer('topcats').subscribe((el:any)=>{
      this.categoryList = el;
    },
    (error:any)=>{

    })
  }
}
