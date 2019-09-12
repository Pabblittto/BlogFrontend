import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogRoutingModule} from './blog-routing.module';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditDescriptionComponent } from './edit-description/edit-description.component';


@NgModule({
  declarations: [MyBlogComponent, AddPostComponent, EditDescriptionComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BlogModule { }
