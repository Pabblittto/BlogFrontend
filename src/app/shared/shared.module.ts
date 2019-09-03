import { FormsModule } from '@angular/forms';
import { ConfirmIdentityComponent } from './../elements/confirm-identity/confirm-identity.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostElementComponent } from '../elements/post-element/post-element.component';
import { TagComponent } from '../elements/tag-element/tag/tag.component';
import { sharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [    
    PostElementComponent, 
    TagComponent,
    ConfirmIdentityComponent
  ],
    imports: [
    CommonModule,
    sharedRoutingModule,
    FormsModule
  ],
  exports:[
    PostElementComponent, 
    TagComponent,
    ConfirmIdentityComponent
  ]
})
export class SharedModule { }
