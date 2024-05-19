import { Component } from '@angular/core';
import { ItemsChildAddItemComponent } from '../items-child-add-item/items-child-add-item.component';

@Component({
  selector: 'app-item-parent',
  standalone: true,
  imports: [ItemsChildAddItemComponent],
  template: `
    <ul>
      @for (item of items; track item) {
        <li>{{item}}</li>
      }
    </ul>
    <app-items-child-add-item itemType="Place" (newItemEvent)="addNewItem($event)"></app-items-child-add-item>
  `,
  styles: ``
})
export class ItemParentComponent {
  items: string[] = ['White House', 'Lincoln Memorial'];

  addNewItem(itemName: string) {
    this.items.push(itemName);
  }
}
