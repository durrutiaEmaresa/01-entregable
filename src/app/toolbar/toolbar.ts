import { Component, EventEmitter, Output } from '@angular/core';
import { BigTitle } from '../../shared/directives/big-title';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.css']
})
export class Toolbar {
 @Output() activeSection = new EventEmitter<string>();

  selectSection(section: string) {
    this.activeSection.emit(section);
  }
}
