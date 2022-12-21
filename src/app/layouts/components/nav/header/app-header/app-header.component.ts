import { Component, OnInit, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['../headers.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Input() faBars = faBars;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  displayModal = false;

  toggleModal() {
    this.displayModal = !this.displayModal;
  }

  // Denna behöver jobba mot ett globalt state
  logoutUser() {
    this.displayModal = false;
    this.authService.logout();
  }
}
