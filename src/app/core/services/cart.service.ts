import { Injectable } from '@angular/core';
import { CartDetails } from '../models/cartDetails';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDetails: Array<CartDetails> = [];

  constructor() { }


  addToCart(product: Product): void {

    const cartIndex = this.cartDetails.findIndex(cartDetails => cartDetails.product.id === product.id);
    if (cartIndex === -1) {
      this.cartDetails.push({
        userId: 'user123',
        cartDetailsId: new Date().getMilliseconds().toString(),
        product,
        quantiity: 1
      });
    } else {
      const cartInfo = this.cartDetails[cartIndex];
      const updatedQuantity = cartInfo.quantiity + 1;
      const updatedCartInfo = { ...cartInfo, quantiity: updatedQuantity };
      this.cartDetails = [...this.cartDetails.slice(0, cartIndex), updatedCartInfo, ...this.cartDetails.slice(cartIndex + 1)];
    }

  }

  fetchAllCart(): Array<CartDetails> {
    return [...this.cartDetails];
  }

  updateQuantity(producct: Product, quantiity: number): void {
    const cartIndex = this.cartDetails.findIndex(cartDetails => cartDetails.product.id === producct.id);
    const cartInfo = this.cartDetails[cartIndex];
    const updatedQuantity = quantiity;
    const updatedCartInfo = { ...cartInfo, quantiity: updatedQuantity };
    this.cartDetails = [...this.cartDetails.slice(0, cartIndex), updatedCartInfo, ...this.cartDetails.slice(cartIndex + 1)];
  }

  removeProduct(productId: string): void {
    console.log(this.cartDetails);
    console.log('id', productId);

    const cartIndex = this.cartDetails.findIndex(cartDetails => cartDetails.product.id === productId);
    console.log(cartIndex);

    this.cartDetails = [...this.cartDetails.slice(0, cartIndex), ...this.cartDetails.slice(cartIndex + 1)];
    console.log(this.cartDetails);

  }
}


