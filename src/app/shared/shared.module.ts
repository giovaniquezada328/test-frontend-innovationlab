import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { TopnavComponent } from './components/topnav/topnav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { OfferComponent } from './components/offer/offer.component';
import { OfficialStoreComponent } from './components/official-store/official-store.component';
import { ItemsCartComponent } from './components/items-cart/items-cart.component';
@NgModule({
  declarations: [
    TopnavComponent,
    FooterComponent,
    CategoryComponent,
    OfferComponent,
    OfficialStoreComponent,
    ItemsCartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    TopnavComponent,
    FooterComponent,
    CategoryComponent,
    OfferComponent,
    OfficialStoreComponent,
    ItemsCartComponent
  ]
})
export class SharedModule { }
