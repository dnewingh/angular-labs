import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <button type="button" class="btn btn-primary">Primary</button>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-reference-guide-001';
}
