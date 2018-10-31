import { ComposedComponent } from './../composed/composed.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/composed', pathMatch: 'full' },
  {path: 'composed/add', component: ComposedComponent},
  {path: 'composed/:id', component: ComposedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
