import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userState$: any;

  constructor(private authService: AuthService) {
    this.userState$ = this.authService.getCurrentUserState();
  }

  ngOnInit(): void {}

  // getCurrentUserState() {
  //   this.authService.getCurrentUserState();
  // }

  setUserTrue() {
    this.authService.loginUser();
  }

  setUserFalse() {
    this.authService.logoutUser();
  }
}
