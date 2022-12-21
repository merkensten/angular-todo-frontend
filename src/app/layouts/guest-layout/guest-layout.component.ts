import { Component } from '@angular/core';

@Component({
  selector: 'app-guest-layout',
  template: `<app-guest-header></app-guest-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-guest-footer></app-guest-footer>`,
})
export class GuestLayoutComponent {}
