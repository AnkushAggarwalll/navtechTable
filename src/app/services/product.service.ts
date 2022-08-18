import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data :any[] = [
    {firstName:"ankush",lastName:"Aggarwal",company:"navtech",location:"hyderabad",package:7},
    {firstName:"naveen",lastName:"kumar",company:"delloite",location:"delhi",package:10},
    {firstName:"pankaj",lastName:"goel",company:"razorpay",location:"banglore",package:13},
    {firstName:"Aanchal",lastName:"Aggarwal",company:"Silver oak health",location:"banglore",package:13},
    {firstName:"Himanshu",lastName:"Gupta",company:"CyberGroup",location:"Noida",package:5},
  ]
  columns: string[] = ['firstName','lastName','company','location','package'];
  constructor() { }
  addProduct(item:any){
    this.data.push(item);
    return this.data
  }
}
