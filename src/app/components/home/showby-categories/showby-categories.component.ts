import { Component } from '@angular/core';
import { HttpserviceService } from 'src/app/core/Services/httpservice.service';

@Component({
  selector: 'app-showby-categories',
  templateUrl: './showby-categories.component.html',
  styleUrls: ['./showby-categories.component.scss']
})
export class ShowbyCategoriesComponent {
  topcatslist1:any=[];
  productlist:any=[];

  constructor(private http:HttpserviceService){

  }

  ngOnInit(){
    this.topcatslist() 
  }

  topcatslist(){
  this.http.getDataFromServer('topcats').subscribe((el:any)=>{
    if(el && el.length > 0){
      this.topcatslist1=el.map((obj:any)=>obj.top_category.name),
      this.topcatslist1.unshift('All'),
      console.log(this.topcatslist1)
    } 
  },
  (el:any)=>{


  })

  }

  getname(categoryname:any){
    let endpoint="category?categoryname="+categoryname
    this.http.getDataFromServer(endpoint).subscribe((el:any)=>{
      if(el !=undefined && el[0] !=undefined && el[0].products && el[0].products.length > 0){
        this.productlist=el[0].products[0].product_info.reco_list.products
      }
      else{
        this.productlist=[]
      }
    })
  }

}


