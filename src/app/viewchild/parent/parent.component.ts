import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // Number:any;
 
  @ViewChild(ChildComponent) num: ChildComponent | undefined

  constructor() { }

  ngOnInit(): void {
  }

  increnum(){
    this.num?.increment()
    
  }

  decrenum(){
    this.num?.decrement()
    
  }

}
