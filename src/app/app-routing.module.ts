import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TheCenterComponent} from "./components/the-center/the-center.component";
import {TheLandComponent} from "./components/the-land/the-land.component";
import {EthicalRanchingComponent} from "./components/ethical-ranching/ethical-ranching.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'ethical-ranching',
        component: EthicalRanchingComponent,
    },
    {
        path: 'the-center',
        component: TheCenterComponent,
    },
    {
        path: 'the-land',
        component: TheLandComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
