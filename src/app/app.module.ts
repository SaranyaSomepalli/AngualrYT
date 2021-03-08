import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VideosComponent } from './videos/videos.component';
import { VideoListingComponent } from './video-listing/video-listing.component';
import { VideoEachComponent } from './video-each/video-each.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreatevideoComponent } from './createvideo/createvideo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YourvideosComponent } from './yourvideos/yourvideos.component';
import { Videos1Component } from './videos1/videos1.component';
import { UpdateComponent } from './update/update.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { SearchidComponent } from './searchid/searchid.component';
import { LoginfComponent } from './loginf/loginf.component';
import { RegistrationfComponent } from './registrationf/registrationf.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    VideosComponent,
    VideoListingComponent,
    VideoEachComponent,
    LoginComponent,
    LogoutComponent,
    CreatevideoComponent,
    YourvideosComponent,
    Videos1Component,
    UpdateComponent,
    SearchComponent,
    SearchidComponent,
    LoginfComponent,
    RegistrationfComponent,
    LoginsuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
