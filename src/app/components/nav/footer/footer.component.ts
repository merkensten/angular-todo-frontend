import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  // Denna behöver jobba mot ett globalt state
  authenticatedUser = false;

  ngOnInit(): void {}

  // Denna behöver jobba mot ett globalt state
  logoutUser() {
    this.authenticatedUser = false;
    alert('You have been logged out');
  }
}
