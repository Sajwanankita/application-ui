import { Component, OnInit } from '@angular/core';
import { CartDetails } from 'src/app/core/models/cartDetails';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity: string;
  cartDetails: Array<CartDetails> = [];
  displayedColumns = ['product', 'quantity', 'update', 'delete'];

  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.cartDetails = this.cartService.fetchAllCart();
  }

  remove(product: Product): void {
    this.cartService.removeProduct(product.id);
    this.cartDetails = [...this.cartService.fetchAllCart()];
  }

  updateQuantity(product: Product): void {
    this.cartService.updateQuantity(product, +this.quantity);
    this.cartDetails = this.cartService.fetchAllCart();
  }
}
