import { UserOnlyGuard } from './guards/UserOnlyGuard';
import { UserModule } from './user/user.module';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
{path: '',redirectTo: 'main',pathMatch: 'full'},
{path: 'main',component: MainComponent },
{path: 'register',component: RegisterComponent },
{path: 'news',component: NewsComponent },
{path: 'post/:id',component: PostComponent },
{path: 'user', loadChildren: './user/user.module#UserModule', canActivate:[UserOnlyGuard]},
{path: 'blog', loadChildren: './blog/blog.module#BlogModule', canActivate:[UserOnlyGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
