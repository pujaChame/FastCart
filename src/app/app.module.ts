import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from "./shared/shared.module";
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TopDealsComponent } from './components/home/top-deals/top-deals.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShowbyCategoriesComponent } from './components/home/showby-categories/showby-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        TopDealsComponent,
        ShowbyCategoriesComponent,
        MyAccountComponent,
        CartComponent,
        ],

    providers: [],

    bootstrap: [AppComponent],
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CarouselModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ]
})
export class AppModule { }
