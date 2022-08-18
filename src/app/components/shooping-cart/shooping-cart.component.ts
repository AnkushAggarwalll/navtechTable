import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.css']
})
export class ShoopingCartComponent implements OnInit {

  constructor(public scs: ShopingCartService) { }

  ngOnInit(): void {
    this.data = this.scs.shopingCartData;
    this.filteredData = this.data
    this.columns = this.scs.ShoppingCartColumns
  }
  filter = new FormGroup({
    name:new FormControl(''),
    location:new FormControl('')
  })
  data:any[] = []
  filteredData=this.data;
  columns:string[] =[];
  clear(){
    this.data = this.scs.shopingCartData;
    this.filteredData = this.data;
  }
  filterData(filter:any){
    console.log(filter)
    let filterValues = filter
    console.log(filterValues.firstName == '' && filterValues.location == '' && filterValues.lastName == '' && filterValues.company == '' && filterValues.package);
    
    if(filterValues.firstName == '' && filterValues.location == '' && filterValues.lastName == '' && filterValues.company == '' && (filterValues.package == 0 || filterValues.package == null))
    this.clear();
    else
    this.filteredData = this.data.filter(item => item.firstName.toLowerCase().includes(filterValues.firstName?.toLowerCase()) && item.location.toLowerCase().includes(filterValues.location?.toLowerCase()) && item.lastName.toLowerCase().includes(filterValues.lastName?.toLowerCase()) && item.company.toLowerCase().includes(filterValues.company?.toLowerCase()) && item.package == filterValues.package)
  }
  deleteFromCart(i:number){
    this.scs.deleteFromCart(i)
    this.data = this.scs.shopingCartData;
    this.filteredData = this.scs.shopingCartData
  }
}
