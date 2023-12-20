import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  number: number = 0;
  string: string = "no Number"
  constructor() { }


  ngOnInit(): void {
  }

  increment() {
    this.number++;
    this.string = "Number is " + this.number
  }

  decrement() {
    if (this.number < 1) {
      alert("can not go below 0");
    } else {
      this.number--;
      this.string = "Number is " + this.number
    }
  }

}
