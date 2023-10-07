import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    SharedComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
