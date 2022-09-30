import { Component, OnInit } from '@angular/core';

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
}
