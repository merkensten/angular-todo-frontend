import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['../header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayModal = false;

  toggleModal() {
    this.displayModal = !this.displayModal;
  }

  // Denna behöver jobba mot ett globalt state
  logoutUser() {
    alert('Användare utloggad');
    this.displayModal = false;
  }
}
