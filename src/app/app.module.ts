import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './core/home/home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAnIG9EVyiI11NBhPYnfazzVdljubCzD8A",
  authDomain: "dreamdev4.firebaseapp.com",
  databaseURL: "https://dreamdev4.firebaseio.com",
  projectId: "dreamdev4",
  storageBucket: "dreamdev4.appspot.com",
  messagingSenderId: "764181293738"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
