import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesPaths } from '../../../shared/routes';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {
  routes = RoutesPaths;
}
