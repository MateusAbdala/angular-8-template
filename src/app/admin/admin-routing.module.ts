import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../_layout/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      //paths
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
