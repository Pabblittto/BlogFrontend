import { ConfirmIdentityComponent } from './../elements/confirm-identity/confirm-identity.component';
import { PostComponent } from './../post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostElementComponent } from '../elements/post-element/post-element.component';
import { TagComponent } from '../elements/tag-element/tag/tag.component';
import { sharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [    
    PostElementComponent, 
    TagComponent,
    ConfirmIdentityComponent],
    imports: [
    CommonModule,
    sharedRoutingModule
  ],
  exports:[
    PostElementComponent, 
    TagComponent,
    ConfirmIdentityComponent
  ]
})
export class SharedModule { }
