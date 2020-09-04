import { Injectable } from '@angular/core';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [{
    id: 'id123',
    name: 'Phone',
    price: 67,
    description: 'Vivo 7',
    tags: 'M1M2',
    category: 'Electronics',
    quantity: 8,
    returnable: true
  },
  {
    id: 'id1234',
    name: 'Bat',
    price: 67,
    description: 'Vivo 7',
    tags: 'M1M2',
    category: 'Electronics',
    quantity: 8,
    returnable: true
  },
  {
    id: 'id12dn3',
    name: 'Notebook',
    price: 657,
    description: 'Notebok 1',
    tags: 'M1M2',
    category: 'Electronics',
    quantity: 8,
    returnable: true
  },
  {
    id: 'id123778',
    name: 'Laptop',
    price: 67,
    description: 'Vivo 7',
    tags: 'M1M2',
    category: 'Electronics',
    quantity: 8,
    returnable: true
  }
];
  constructor() { }

  getAllProducts(): Array<Product> {
    return this.products;
  }

}
