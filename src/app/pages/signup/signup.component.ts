import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  formSucess = false;
  formError = false;
  formErrorMessage = 'Det gick inte att skapa ett konto försök igen senare';

  ngOnInit(): void {}
}
