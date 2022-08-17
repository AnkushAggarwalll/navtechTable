import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

  interface Shopping {
    firstName:string,
    lastName:string;
    compnay:string,
    location:string,
    package:string,
  }

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {

  shopingCartData :Shopping[] = []
  ShoppingCartColumns: string[] = ['firstName','lastName','compnay','location','package'];
  constructor(public notification : ToastrService
    ) { }

  deleteFromCart(i :number){
   this.shopingCartData.splice(i,1);
   this.notification.success("Deleted from bag Successfully!!")
  }
  addToCart(item:Shopping){
    this.shopingCartData.push(item);
   this.notification.success("Added to bag Successfully!!")
  }
}
