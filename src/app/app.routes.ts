import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewGuestComponent } from './components/new-guest/new-guest.component';
import { CurrentGuestsComponent } from './components/current-guests/current-guests.component';
import { ReturningGuestComponent } from './components/returning-guest/returning-guest.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
      path: 'new-guest',
      component: NewGuestComponent
    },
    {
      path: 'current-guests',
      component: CurrentGuestsComponent
    },
    {
      path: 'returning-guest',
      component: ReturningGuestComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule { }
