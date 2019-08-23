import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { ClubeLayoutComponent } from './_layout/clube-layout/clube-layout.component';


const routes: Routes = [
  {
    path: 'login', component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', component: ClubeLayoutComponent,
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
