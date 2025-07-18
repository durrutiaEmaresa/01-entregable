import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  @Output() activeSection = new EventEmitter<string>();

  navigateTo(section: string) {
    // Logic to navigate to the specified section
    console.log(`Navigating to ${section}`);
    this.activeSection.emit(section);
  }
}
