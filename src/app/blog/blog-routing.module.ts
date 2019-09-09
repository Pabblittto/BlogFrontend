
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBlogComponent } from './my-blog/my-blog.component';


const UserRoutes:Routes=[
    {path:"myblog", component:MyBlogComponent}

]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
