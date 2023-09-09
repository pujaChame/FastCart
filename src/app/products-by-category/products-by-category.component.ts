import { Component } from '@angular/core';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent {

  categoryList : any = [];
  productList : any = [];
  selectedCategory : any = "";

  constructor(private http:HttpService){

  }

  ngOnInit(){
    this.getCategory();
  }
  getCategory() {
    this.http.getDataFromServer('topcats').subscribe((el:any)=>{
      this.categoryList = el.map((obj:any)=>obj.top_category.name);
      this.categoryList.unshift('ALL');
      console.log(this.categoryList)
    },
    (error:any)=>{

    })
  }

  getSelectedProducts(category:string){
    const endPoint = "categories?categoryName="+category;
    this.selectedCategory = category;
    this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
      if(el != undefined && el[0] != undefined){

        this.productList = el[0].products[0].product_info.reco_list.products;
      }
      else{
        this.productList = [];
      }
    },
    (error:any)=>{

    })
  }
}
