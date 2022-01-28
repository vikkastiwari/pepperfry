import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { GuestComponent } from './pages/guest/guest.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { AppRoutingModule } from './app.routing';
import { ProductComponent } from './pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GuestComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },],
  bootstrap: [AppComponent]
})
export class AppModule { }
