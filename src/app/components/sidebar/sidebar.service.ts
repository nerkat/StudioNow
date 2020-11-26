import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }
}
