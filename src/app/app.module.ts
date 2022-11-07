import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSwipeComponent } from './search-swipe/search-swipe.component';
import { SwipeScreenComponent } from './swipe-screen/swipe-screen.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { HeightConvertorPipe } from './common/pipe/height-convertor.pipe';
import { GetDataService } from './common/service/get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    SearchSwipeComponent,
    SwipeScreenComponent,
    ViewProfileComponent,
    HeightConvertorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
