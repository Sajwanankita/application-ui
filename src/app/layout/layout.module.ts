import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

];

@NgModule({
  declarations: [HomeComponent, ProductsComponent, CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormsModule,
    RouterModule
  ]
})
export class LayoutModule { }
