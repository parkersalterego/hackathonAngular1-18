import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { NewGuestComponent } from './components/new-guest/new-guest.component';
import { CurrentGuestsComponent } from './components/current-guests/current-guests.component';
import { GuestsService } from './services/guests.service';
import { UserService } from './services/user.service';
import { ValidateGuestService } from './services/validate-guest.service';
import { ReturningGuestComponent } from './components/returning-guest/returning-guest.component';
import { NewUserComponent } from './components/new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewGuestComponent,
    CurrentGuestsComponent,
    ReturningGuestComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    GuestsService,
    ValidateGuestService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
