import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

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
      console.log(formData);
    }
  }
}
