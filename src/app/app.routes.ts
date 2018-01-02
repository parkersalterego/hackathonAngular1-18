import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewGuestComponent } from './components/new-guest/new-guest.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
      path: '/new-guest',
      component: NewGuestComponent
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
