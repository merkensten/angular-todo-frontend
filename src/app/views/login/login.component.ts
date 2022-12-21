import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  formSucess = false;
  formError = false;
  formErrorMessage = 'Fel användarnamn eller lösenord';

  ngOnInit(): void {}

  resetFormErrors() {
    this.formError = false;
    this.formErrorMessage = 'Fel användarnamn eller lösenord';
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
      this.resetFormErrors();
      const { username, password } = formData;
      console.log(username, password);

      this.authService.login(username, password).subscribe({
        next: (sucess) => {
          if (sucess) {
            this.router.navigate(['/app']);
          }
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
    }
  }
}
