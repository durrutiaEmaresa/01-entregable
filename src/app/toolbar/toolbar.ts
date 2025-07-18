import { Component } from '@angular/core';
import { BigTitle } from '../../shared/directives/big-title';

@Component({
  selector: 'app-toolbar',
  imports: [BigTitle],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.css']
})
export class Toolbar {

}
