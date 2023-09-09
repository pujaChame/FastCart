import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
