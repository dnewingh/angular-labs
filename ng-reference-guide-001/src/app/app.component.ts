import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav class="navbar navbar-expand border-bottom">
      <div class="container-fluid">
        <strong class="navbar-brand">***placeholder for top nav bar***</strong>
        <div class="navbar-nav">
          <a class="nav-link" routerLink="/">Home</a>
          <a class="nav-link" routerLink="/actors">Actors</a>
          <a class="nav-link" routerLink="/toy-selector-001">Toy Selector</a>
        </div>
      </div>
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
