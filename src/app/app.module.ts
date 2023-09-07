import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { SharedModule } from "./shared/shared.module";
import { TopDealsComponent } from './components/home/top-deals/top-deals.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        NavbarComponent,
        TopDealsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CarouselModule
    ]
})
export class AppModule { }
