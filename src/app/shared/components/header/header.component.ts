import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private http: HttpService, private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router);
    console.log(this.activatedRoute);
  }

}
