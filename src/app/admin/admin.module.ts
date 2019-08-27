import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from '../_layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from '../_layout/admin-header/admin-header.component';
import { AdminSideMenuComponent } from '../_layout/admin-side-menu/admin-side-menu.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminSideMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
