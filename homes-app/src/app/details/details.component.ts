import { Component, inject } from '@angular/core';  //inject gives access to the url parameter
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

//Typescript note: '?' is the optional chaining operator from TS and guards against calling .id on undefined
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocation?.id }}  
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
