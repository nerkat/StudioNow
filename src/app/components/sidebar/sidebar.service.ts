import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpen: boolean = false;

  toggle = function () {
    this.isOpen = !this.isOpen;
  }

  constructor() { }
}
