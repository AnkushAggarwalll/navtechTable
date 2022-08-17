import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter = new FormGroup({
    name:new FormControl(''),
    location:new FormControl('')
  })
  data:any[] = [
    {firstName:"ankush",lastName:"Aggarwal",company:"navtech",location:"hyderabad",package:7},
    {firstName:"naveen",lastName:"kumar",company:"delloite",location:"delhi",package:10},
    {firstName:"pankaj",lastName:"goel",company:"razorpay",location:"banglore",package:13},
    {firstName:"Aanchal",lastName:"Aggarwal",company:"Silver oak health",location:"banglore",package:13},
    {firstName:"Himanshu",lastName:"Gupta",company:"CyberGroup",location:"Noida",package:5},
  ]
  filteredData=this.data;
  columns:string[] =Object.keys(this.data[0]);
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
    this.filteredData = this.data.filter(item => item.firstName.toLowerCase().includes(filterValues.name) && item.location.toLowerCase().includes(filterValues.location))
  }
}
