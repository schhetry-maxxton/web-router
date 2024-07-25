//import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

import { RegFormComponent } from './reg-form/reg-form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './address/address.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DevopsComponent } from './devops/devops.component';
import { MapComponent } from './map/map.component';
import { MEANComponent } from './mean/mean.component';
import { MERNComponent } from './mern/mern.component';
import { VideoComponent } from './video/video.component';
import { GenaiComponent } from './genai/genai.component';
import { RestCallComponent } from './rest-call/rest-call.component';

//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.

// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
    //to this object, but we are redirecting this path to items path using redirectTo key.
    
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    { path: 'regForm', component:  RegFormComponent},
    { path: 'gallery', component:  GalleryComponent},
    { path: 'contactUs', component:  ContactUsComponent},
    { path: 'footer', component:  FooterComponent},
    { path: 'address', component:  AddressComponent},
    { path: 'carousel', component:  CarouselComponent},
    { path: 'devops', component:  DevopsComponent},
    { path: 'map', component:  MapComponent},
    { path: 'mean', component:  MEANComponent},
    { path: 'mern', component:  MERNComponent},
    { path: 'video', component:  VideoComponent},
    { path: 'genai', component:  GenaiComponent},
    { path: 'restCall', component:  RestCallComponent},
];

//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)

export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);