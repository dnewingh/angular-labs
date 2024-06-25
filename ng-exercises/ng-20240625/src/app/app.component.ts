import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <div class="container">
      <router-outlet />
    </div>
  `,
  styles: [`
    h1 {
      border-bottom: black solid 0.5px;
      padding: 8px
    }
  `],
})
export class AppComponent {
  title = 'ng-20240625';
}
