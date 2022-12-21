import { Component } from '@angular/core';

@Component({
  selector: 'app-core-layout',
  template: `<app-app-header></app-app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-app-footer></app-app-footer>`,
})
export class CoreLayoutComponent {}
