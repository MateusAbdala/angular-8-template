import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PublicHeaderComponent } from './_layout/public-header/public-header.component';
import { PublicFooterComponent } from './_layout/public-footer/public-footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PublicLayoutComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
