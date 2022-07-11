import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './page/client/client.component';
import { DetailsComponent } from './page/details/details.component';

const routes: Routes = [
  {path : "" , redirectTo:"/client" , pathMatch:"full" },
  {path : "client" , component:ClientComponent},
  {path : "client/:id" , component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
