import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { AppModule } from './../app.module';
import { UserRoutingModule } from './user-routing.module';
import { AuthService } from './../services/Auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileGeneralComponent } from './profile-general/profile-general.component';
import { ProfilePasswordComponent } from './profile-password/profile-password.component';
import { ProfileTagsComponent } from './profile-tags/profile-tags.component';




@NgModule({
  declarations: [ProfileComponent,
    ProfilePictureComponent,
    ProfileGeneralComponent,
    ProfilePasswordComponent,
    ProfileTagsComponent,],
  providers:[AuthService],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class UserModule { }
