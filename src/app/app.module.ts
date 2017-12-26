import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent }   from './not-found.component';
import { FooterComponent } from './footer/footer.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductsModule,
    AuthModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ThankyouComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
