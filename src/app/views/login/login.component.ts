import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loading = false;
  formSucess = false;
  formError = false;
  formErrorMessage = 'Fel användarnamn eller lösenord';

  resetFormErrors() {
    this.formError = false;
  }

  onLoginUser(username: string, password: string) {
    if (username && password.length >= 6) {
      this.resetFormErrors();
      this.loading = true;

      this.authService.login(username, password).subscribe({
        next: (sucess) => {
          console.log(sucess);
          if (sucess) {
            // this.router.navigate(['/app']);
          }
        },
        error: (e) => {
          console.error(e);
          this.formError = true;
          console.log('error kördes');
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
          console.info('complete');

          // if (this.authService.getCurrentUserState()) {
          //   this.router.navigate(['/app']);
          // }
        },
      });
    }
  }

  onFormSubmit(form: NgForm) {
    const formData = form.value;
    const username = formData.username;
    const password = formData.password;

    if (password.length < 6) {
      this.formError = true;
      this.formErrorMessage = 'Lösenordet måste vara minst 6 tecken långt';
      return;
    }

    if (username && password.length >= 6) {
      this.onLoginUser(username, password);
    }
  }
}
