import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/app/dashboard/dashboard.component';
import { AccountComponent } from './pages/app/account/account.component';
import { HeaderComponent } from './components/nav/header/header.component';
import { FooterComponent } from './components/nav/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent, LoginComponent, SignupComponent, DashboardComponent, AccountComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
