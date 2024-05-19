import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalActorsService } from '../local-actors.service';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="name" required />

    <p>Value: {{ name }}</p>

    <button type="button" (click)="addNewItem()">Add</button>

    <ul>
      @for(actor of componentActors; track actor) {
        <li>{{ actor }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class ActorsComponent {
  name: string = '';
  localActorsService: LocalActorsService = inject(LocalActorsService);
  componentActors: string[] = [];

  addNewItem() {
    this.localActorsService.addActor(this.name);
    this.componentActors = this.localActorsService.getActors();
  }

}
