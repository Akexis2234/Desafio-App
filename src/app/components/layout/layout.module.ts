import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BuscarComponent } from './header/buscar/buscar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    HeaderComponent
    
  ]
})
export class LayoutModule { }
