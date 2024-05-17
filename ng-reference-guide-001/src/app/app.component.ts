import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div>placeholder for top nav bar</div>
    <main class="container">
      <router-outlet />
    </main>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-reference-guide-001';
}
