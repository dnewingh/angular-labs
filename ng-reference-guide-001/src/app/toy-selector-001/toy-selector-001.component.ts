import { Component } from '@angular/core';

interface Toy {
  id: number,
  title: string,
  photoUrl: string
}

@Component({
  selector: 'app-toy-selector-001',
  standalone: true,
  imports: [],
  template: `
    <select name="toy-selector" id="toy-selector" #toySelector (change)="updateSelectedToy(toySelector.value)">
      <option selected value="">Toy Selector</option>
      @for (toy of toys; track toy.id) {
        <option [value]="toy.id">{{toy.title}}</option>
      }
    </select>
    <br>
    @if (selectedToy) {
      <img [src]="selectedToy.photoUrl" alt="">
    } @else {
      <p>Please select a toy to see its photo.</p>
    }
  `,
  styles: ``
})
export class ToySelector001Component {
  toys: Toy[] = [
    {
      id: 1,
      title: 'Buzz',
      photoUrl: 'data:image/jpeg;base64,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'
    },
    {
      id: 2,
      title: 'Woody',
      photoUrl: 'data:image/jpeg;base64,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'
    },
    {
      id: 3,
      title: 'Rex',
      photoUrl: 'data:image/jpeg;base64,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'
    }
  ];
  selectedToy?: Toy

  updateSelectedToy(toyId: string) {
    this.selectedToy = this.toys[(Number(toyId) - 1)]
  }


}