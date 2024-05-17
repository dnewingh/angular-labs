import { Component } from '@angular/core';
import { HomeListingSelectorComponent } from '../home-listing-selector/home-listing-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeListingSelectorComponent],
  template: `
    <p>
      home works!
    </p>
    <app-home-listing-selector></app-home-listing-selector>
  `,
  styles: ``
})
export class HomeComponent {

}
