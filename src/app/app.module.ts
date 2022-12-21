import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { CreateTodoComponent } from './components/core/todos/create-todo/create-todo.component';
import { DisplayTodosComponent } from './components/core/todos/display-todos/display-todos.component';
import { TodoItemComponent } from './components/core/todos/todo-item/todo-item.component';
import { UpdateTodoComponent } from './components/core/todos/update-todo/update-todo.component';
import { AppHeaderComponent } from './components/nav/header/app-header/app-header.component';
import { GuestHeaderComponent } from './components/nav/header/guest-header/guest-header.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { LinkButtonComponent } from './components/ui/link-button/link-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    CreateTodoComponent,
    DisplayTodosComponent,
    TodoItemComponent,
    UpdateTodoComponent,
    AppHeaderComponent,
    GuestHeaderComponent,
    ButtonComponent,
    LinkButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
