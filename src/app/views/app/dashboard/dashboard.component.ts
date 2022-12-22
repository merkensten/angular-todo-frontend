import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  userId = this.authService.getUserId();
  loading = false;
  error = false;
  todos$: any = [];

  getTodos() {
    this.loading = true;
    this.apiService.getTodos(`todo/${this.userId}`).subscribe({
      next: (todos) => {
        console.log(todos);
        this.todos$ = todos;
      },
      error: (e) => {
        this.error = true;
        console.error(e);
        console.log('error kördes');
      },
      complete: () => {
        console.info('complete');
        this.loading = false;
      },
    });
  }

  ngOnInit(): void {
    console.log(this.userId);
    this.getTodos();

    // this.apiService
    //   .get(`todo/${this.userId}`)
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  }
}
