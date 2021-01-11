import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParallaxDirective} from "./directives/paralax.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ParallaxDirective
  ],
  exports: [
      ParallaxDirective
  ]
})
export class SharedModule { }
