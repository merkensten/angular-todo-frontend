import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guest Views
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { HomeComponent } from './views/home/home.component';

// App views
import { DashboardComponent } from './views/app/dashboard/dashboard.component';
import { AccountComponent } from './views/app/account/account.component';

import { CoreLayoutComponent } from './layouts/core-layout/core-layout.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  // App routes
  {
    path: 'app',
    component: CoreLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      { path: 'konto', component: AccountComponent },
      { path: '**', component: NotFoundComponent },
    ],
    canActivate: [AuthGuard],
  },
  // Guest routes
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'logga-in', component: LoginComponent },
      { path: 'registrera', component: SignupComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
