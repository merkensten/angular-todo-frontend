import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guest Views
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

// App views
import { DashboardComponent } from './pages/app/dashboard/dashboard.component';
import { AccountComponent } from './pages/app/account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logga-in', component: LoginComponent },
  { path: 'registrera', component: SignupComponent },
  { path: 'app', component: DashboardComponent },
  { path: 'app/konto', component: AccountComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
