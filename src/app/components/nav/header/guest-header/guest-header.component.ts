import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrls: ['../header.component.scss'],
})
export class GuestHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayModal = false;

  toggleModal() {
    this.displayModal = !this.displayModal;
  }
}
