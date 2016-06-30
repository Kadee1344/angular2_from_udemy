import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'shopping-new-item',
  template: `
    <div class="input">
      <label for="item-name">Name</label>
      <input type="text" id="item-name" [(ngModel)]="item.name">
    </div>
    <div class="input">
      <label for="item-amt">Amount</label>
      <input type="text" id="item-amt" [(ngModel)]="item.amount">
    </div>
    <button (click)="onClick()">Add Item</button>
  `,
  outputs: ['itemAdded']
})

export class ShoppingNewItem {
  item = {name: '', amount: 0};
  itemAdded = new EventEmitter<{name: string, amount: number}>();

  onClick() {
    this.itemAdded.emit(this.item);
  }
}