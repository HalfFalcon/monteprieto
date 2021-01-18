import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TheCenterComponent} from './components/the-center/the-center.component';
import {TheLandComponent} from './components/the-land/the-land.component';
import {SustainableRanchingComponent} from './components/sustainable-ranching/sustainable-ranching.component';
import {OurHistoryComponent} from './components/our-history/our-history.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'sustainable-ranching',
        component: SustainableRanchingComponent,
    },
    {
        path: 'the-center',
        component: TheCenterComponent,
    },
    {
        path: 'the-land',
        component: TheLandComponent,
    },
    {
        path: 'our-history',
        component: OurHistoryComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
