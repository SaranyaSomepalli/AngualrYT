import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoEachComponent } from './video-each/video-each.component';
import { VideoListingComponent } from './video-listing/video-listing.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreatevideoComponent } from './createvideo/createvideo.component';
import { YourvideosComponent } from './yourvideos/yourvideos.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';
import { LoginfComponent } from './loginf/loginf.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationfComponent } from './registrationf/registrationf.component';


const routes: Routes = [
  
 // {
  //  path:'',
   // component:VideoListingComponent
  //},
  {
    path:'',
    component:LoginfComponent
  },
  {
    path:'loginsuccess',
    component:LoginsuccessComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'registration',
    component:RegistrationfComponent
  },
  {
    path:'create',
    component:CreatevideoComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'yourvideos',
    component:YourvideosComponent
  },
  
  {
    path:"video/:id",
    component:VideoEachComponent
  },
  {
    path:"yourvideos/update/:id",
    component:UpdateComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
