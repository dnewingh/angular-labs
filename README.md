# Angular Labs

## Use the following command to initialize a new project directory
```shell
ng new ng-project-name --standalone --style=scss --inline-style --inline-template --skip-git --no-ssr
```

## Install ng-bootstrap
```shell
ng add @ng-bootstrap/ng-bootstrap
```

## Generate new component
```shell
ng g c component-name
```
Example output *home.component.ts*
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>
      home works!
    </p>
  `,
  styles: ``
})
export class HomeComponent {

}
```

## Create route
Example route *app.routes.ts*:
```ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    }
];
```

## Import and render a child component
Example output *home.component.ts*:
```ts
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
```

## Reference guide project elements
1. ng-bootstrap as design system
2. Top app bar with navigation to 3 routes
    - '/' -> Home
    - '/router' -> Router
    - '/forms' -> Forms