import { InputSelectListComponent } from './../elements/input-select-list/input-select-list.component';
import { DragAndDropDirective } from './../directives/drag-and-drop.directive';
import { PostModyficationPanelComponent } from './../elements/post-modyfication-panel/post-modyfication-panel.component';
import { ConfirmChangesComponent } from './../elements/confirm-changes/confirm-changes.component';
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
    ConfirmIdentityComponent,
    ConfirmChangesComponent,
    PostModyficationPanelComponent,
    DragAndDropDirective,
    InputSelectListComponent
  ],
    imports: [
    CommonModule,
    sharedRoutingModule,
    FormsModule
  ],
  exports:[
    PostElementComponent, 
    TagComponent,
    ConfirmIdentityComponent,
    ConfirmChangesComponent,
    PostModyficationPanelComponent,
    DragAndDropDirective,
    InputSelectListComponent

  ]
})
export class SharedModule { }
