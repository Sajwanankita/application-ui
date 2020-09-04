import { Component, OnInit } from '@angular/core';
import { Product } from './../../../core/models/product';
import { ProductsService } from './../../../core/services/products.service';
import { CartService } from './../../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];
  displayedColumns = ['Name', 'Price', 'Description', 'Tags', 'Category', 'Quantity', 'Returnable', 'Add'];
  constructor(private readonly productService: ProductsService,
    private readonly cartService: CartService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }


}
