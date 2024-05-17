import { Component } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home-listing-selector',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for(listing of listings; track listing) {
        <li>{{ listing }}</li>
      }
    </ul>

    <p>Selected Listing: {{ selectedListingIndex }}</p>

    <button type="button" class="btn btn-primary" (click)="nextListing()" [disabled]="nextDisabled">Next</button>
    <button type="button" class="btn btn-primary" (click)="previousListing()" [disabled]="previousDisabled">Previous</button>

    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name">
    <p>{{ inputName }}</p>
  `,
  styles: `
  li {
    color: red
  }
  `
})
export class HomeListingSelectorComponent {
  listings: string[] = ['Main St', 'Oak St'];
  selectedListingIndex: number = 0;
  nextDisabled: boolean = false;
  previousDisabled: boolean = true;
  inputName: string = 'Dan';

  nextListing() {
    this.selectedListingIndex++
    this.previousDisabled = false;
    if(this.selectedListingIndex === this.listings.length - 1) {
      this.nextDisabled = true;
    }
  }

  previousListing() {
    this.selectedListingIndex--
    this.nextDisabled = false;
    if(this.selectedListingIndex === 0) {
      this.previousDisabled = true;
    }
  }


}
