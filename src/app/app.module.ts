import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { AppFooterComponent } from './_layout/app-footer/app-footer.component';
import { AuthService } from './_services/auth.service';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AdminSideMenuComponent } from './_layout/admin-side-menu/admin-side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminSideMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
