import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SharedModule { }
