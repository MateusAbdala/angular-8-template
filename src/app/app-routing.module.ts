import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  {
    path: 'login', component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin', component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canLoad: [AuthGuard]
  },
  {
    path: '', component: PublicLayoutComponent,
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
