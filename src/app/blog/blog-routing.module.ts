
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const UserRoutes:Routes=[
    {path:"myblog", component:null}

]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
