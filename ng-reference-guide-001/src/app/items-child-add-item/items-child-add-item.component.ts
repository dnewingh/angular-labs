import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-items-child-add-item',
  standalone: true,
  imports: [],
  template: `
    <label for="item-input">Add {{ itemType }}:</label>
    <input type="text" id="item-input" #newItem>
    <button type="button" (click)="addNewItem(newItem.value)">Add {{ itemType }}</button>
  `,
  styles: ``
})
export class ItemsChildAddItemComponent {
  @Input() itemType = '';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(itemName: string) {
    this.newItemEvent.emit(itemName);
  }
}
