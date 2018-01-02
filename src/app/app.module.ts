import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { NewGuestComponent } from './components/new-guest/new-guest.component';
import { CurrentGuestsComponent } from './components/current-guests/current-guests.component';
import { GuestsService } from './services/guests.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewGuestComponent,
    CurrentGuestsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    GuestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
