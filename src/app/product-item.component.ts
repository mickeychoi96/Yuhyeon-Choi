import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  items = ITEMS;
  selectedItem: Item;
  name = 'ngx sharebuttons';
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
