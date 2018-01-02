import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { NewGuestComponent } from './components/new-guest/new-guest.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewGuestComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
