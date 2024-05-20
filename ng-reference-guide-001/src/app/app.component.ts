import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav class="text-center border-bottom">
      <strong>***placeholder for top nav bar***</strong>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/actors">Actors</a></li>
        <li><a routerLink="/toy-selector-001">Toy Selector</a></li>
      </ul>
    </nav>
    <main class="container">
      <router-outlet />
    </main>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-reference-guide-001';
}
