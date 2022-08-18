import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output('clear') Clear:EventEmitter<any> = new EventEmitter()
  @Output('filter') filterDataValues:EventEmitter<any> = new EventEmitter()
  constructor() { }
  filter = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    location:new FormControl(''),
    company:new FormControl(''),
    package:new FormControl()
  })
  ngOnInit(): void {
  }
  clear(){
    this.filter.setValue({
      firstName:'',
    lastName:'',
    location:'',
    company:'',
    package:null
    });
    this.Clear.emit();
  }
  filterData(){    
    this.filterDataValues.emit(this.filter.value)
  }
}
