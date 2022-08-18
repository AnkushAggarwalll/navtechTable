import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(public scs : ShopingCartService,public ps: ProductService,public dialog: MatDialog){}
  ngOnInit(){
    this.data = this.ps.data
    this.filteredData=this.data;
    this.columns =this.ps.columns;
}

  data:any[] = []
  filteredData=this.data;
  columns:string[] =[]
  clear(){
    this.data = this.ps.data;
    this.filteredData = this.data;
  }
  filterData(filter:any){
    console.log(filter)
    let filterValues = filter
    console.log(filterValues.firstName == '' && filterValues.location == '' && filterValues.lastName == '' && filterValues.company == '' && filterValues.package == null);
    
    if(filterValues.firstName == '' && filterValues.location == '' && filterValues.lastName == '' && filterValues.company == '' && filterValues.package == null)
    this.clear();
    else
    this.filteredData = this.data.filter(item => item.firstName.toLowerCase().includes(filterValues.firstName?.toLowerCase()) && item.location.toLowerCase().includes(filterValues.location?.toLowerCase()) && item.lastName.toLowerCase().includes(filterValues.lastName?.toLowerCase()) && item.company.toLowerCase().includes(filterValues.company?.toLowerCase()) && item.package == filterValues.package)
  }
  addToCart(item:any){
    this.scs.addToCart(item)
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '300px',
      data: {firstName:'',lastName:'',company:'',location:'',package:0},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      
      if(result)
      this.data = this.ps.addProduct(result);
    });
  }
  selectAll(checkbox:any){
    var checkboxes = document.getElementsByTagName('input');
    if (checkbox.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
  }
}
