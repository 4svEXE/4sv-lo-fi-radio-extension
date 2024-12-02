import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeComponent } from './home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HiroComponent } from './components/hiro/hiro.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HiroComponent,

  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class HomeModule { }
