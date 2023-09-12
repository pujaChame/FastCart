import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private http: HttpService, private router: Router, private activatedRoute: ActivatedRoute) {

  }
  
  actionName! : string;
  triggerAction(name:string){
    this.actionName = name;
  }


  getData(data:any){
    this.actionName = data;
  }
}
