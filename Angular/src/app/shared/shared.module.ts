import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardsComponent } from './cards/cards.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropdownComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class SharedModule { }
