import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgSimpleSidebarModule} from 'ng-simple-sidebar';
import {HomeComponent} from './components/home/home.component';
import {ParallaxComponent} from './components/parallax/parallax.component';
import {TheCenterComponent} from './components/the-center/the-center.component';
import {TheLandComponent} from './components/the-land/the-land.component';
import {SustainableRanchingComponent} from './components/sustainable-ranching/sustainable-ranching.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './components/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        SustainableRanchingComponent,
        HomeComponent,
        TheCenterComponent,
        TheLandComponent,
        ParallaxComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgSimpleSidebarModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
