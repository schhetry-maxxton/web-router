import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { routes } from './app.router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MEANComponent } from './mean/mean.component';
import { MERNComponent } from './mern/mern.component';
import { DevopsComponent } from './devops/devops.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './address/address.component';
import { VideoComponent } from './video/video.component';
import { MapComponent } from './map/map.component';
import { GenaiComponent } from './genai/genai.component';
import { RestCallComponent } from './rest-call/rest-call.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    RegFormComponent,
    GalleryComponent,
    ContactUsComponent,
    HomeComponent,
    MEANComponent,
    MERNComponent,
    DevopsComponent,
    CarouselComponent,
    FooterComponent,
    AddressComponent,
    VideoComponent,
    MapComponent,
    GenaiComponent,
    RestCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
