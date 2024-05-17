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

## Create route
Example route:
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

## Reference guide project elements
1. ng-bootstrap as design system
2. Top app bar with navigation to 3 routes
    - '/' -> Home
    - '/router' -> Router
    - '/forms' -> Forms