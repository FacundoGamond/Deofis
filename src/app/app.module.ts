import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms'; //Modulo para poder usar el ngModule
import { HttpClientModule } from '@angular/common/http'; //Para poder hacer peticiones ajax



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OfertsComponent } from './components/oferts/oferts.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfertsComponent,
    SliderComponent,
    ProductsComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
