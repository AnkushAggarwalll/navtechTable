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
    this.filter.setValue({
      name:'',
      location:''
    });
    this.filteredData = this.data
  }
  filterData(){
    console.log(this.filter)
    let filterValues = this.filter.value
    // if(filterValues.name == '' && filterValues.location == '')
    // alert("before apllying please fill atleast one filter criteria")
    this.filteredData = this.data.filter(item => item.firstName.toLowerCase().includes(filterValues.name?.toLowerCase()) && item.location.toLowerCase().includes(filterValues.location?.toLowerCase()))
  }
  deleteFromCart(i:number){
    this.scs.deleteFromCart(i)
    this.data = this.scs.shopingCartData;
    this.filteredData = this.scs.shopingCartData
  }
}
