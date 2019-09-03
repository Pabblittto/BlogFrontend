
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfilePasswordComponent } from './profile-password/profile-password.component';
import { ProfileGeneralComponent } from './profile-general/profile-general.component';

const UserRoutes:Routes=[
  {path:"profile",component:ProfileComponent,
  children:[
      {path:'', redirectTo:'General', pathMatch:'full'},
      {path:'Picture',component:ProfilePictureComponent},
      {path:'Password',component:ProfilePasswordComponent},
      {path:'General',component:ProfileGeneralComponent},

    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
