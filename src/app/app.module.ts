import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgSimpleSidebarModule} from "ng-simple-sidebar";
import {HomeComponent} from "./components/home/home.component";
import {ParallaxComponent} from "./components/parallax/parallax.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ParallaxComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgSimpleSidebarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
