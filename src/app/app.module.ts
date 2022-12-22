import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './shared/services/api/auth.interceptor';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { DashboardComponent } from './views/app/dashboard/dashboard.component';
import { AccountComponent } from './views/app/account/account.component';
import { CreateTodoComponent } from './shared/components/core/todos/create-todo/create-todo.component';
import { DisplayTodosComponent } from './shared/components/core/todos/display-todos/display-todos.component';
import { TodoItemComponent } from './shared/components/core/todos/todo-item/todo-item.component';
import { UpdateTodoComponent } from './shared/components/core/todos/update-todo/update-todo.component';
import { AppHeaderComponent } from './layouts/components/nav/header/app-header/app-header.component';
import { GuestHeaderComponent } from './layouts/components/nav/header/guest-header/guest-header.component';
import { ButtonComponent } from './shared/components/ui/button/button.component';
import { LinkButtonComponent } from './shared/components/ui/link-button/link-button.component';
import { CoreLayoutComponent } from './layouts/core-layout/core-layout.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { AppFooterComponent } from './layouts/components/nav/footer/app-footer/app-footer.component';
import { GuestFooterComponent } from './layouts/components/nav/footer/guest-footer/guest-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AccountComponent,
    CreateTodoComponent,
    DisplayTodosComponent,
    TodoItemComponent,
    UpdateTodoComponent,
    AppHeaderComponent,
    GuestHeaderComponent,
    ButtonComponent,
    LinkButtonComponent,
    CoreLayoutComponent,
    GuestLayoutComponent,
    AppFooterComponent,
    GuestFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
