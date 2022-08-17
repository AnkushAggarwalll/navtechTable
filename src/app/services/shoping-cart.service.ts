import { Injectable } from '@angular/core';

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
  constructor() { }

  deleteFromCart(i :number){
   this.shopingCartData.splice(i,1);
   alert("Deleted from bag Successfully!!")
  }
  addToCart(item:Shopping){
    this.shopingCartData.push(item);
    alert("Added to bag Successfully!!")
  }
}
