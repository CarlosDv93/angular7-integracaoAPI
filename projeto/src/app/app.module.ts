import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuModule,
    BrowserAnimationsModule
  ],
  providers: [
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
