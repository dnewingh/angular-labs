import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressTableComponent } from './address-table/address-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, AddressFormComponent, AddressTableComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <mat-slide-toggle>Toggle me!</mat-slide-toggle>
    <app-address-form />
    <app-address-table />

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-angular-material-ui';
}
