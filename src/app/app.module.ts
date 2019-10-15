import { BlogService } from './services/Blog/blog.service';
import { AuthInterceptor } from './objects/Interceptors/AuthInterceptor';
import { SharedModule } from './shared/shared.module';
import { ConfirmIdentityComponent } from './elements/confirm-identity/confirm-identity.component';
import { TagComponent } from './elements/tag-element/tag/tag.component';
import { UserOnlyGuard } from './guards/UserOnlyGuard';
import { UserModule } from './user/user.module';
import { MessagesService } from './services/Messages/messages.service';
import { CheckPoolsService } from './services/Registration/check-pools.service';
import { AuthService } from './services/Auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainMessagesComponent } from './main-messages/main-messages.component';
import { NewsComponent } from './news/news.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/Post/post.service';
import { PostElementComponent } from './elements/post-element/post-element.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    MainMessagesComponent,
    NewsComponent,
    PostComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    SharedModule
  ],
  exports:[

  ],
  providers: [AuthService,CheckPoolsService,MessagesService,PostService,UserOnlyGuard,BlogService,
    {provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
