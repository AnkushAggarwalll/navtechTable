import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ShoopingCartComponent } from './components/shooping-cart/shooping-cart.component';

const routes: Routes = [
  {path:"shopping",component:ShoopingCartComponent},
  {path:"",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
