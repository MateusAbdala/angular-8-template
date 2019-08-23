import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubeLayoutComponent } from './_layout/clube-layout/clube-layout.component';
import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { ClubeHeaderComponent } from './_layout/clube-header/clube-header.component';
import { ClubeFooterComponent } from './_layout/clube-footer/clube-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ClubeLayoutComponent,
    ClubeHeaderComponent,
    ClubeFooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
