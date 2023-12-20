import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Data=[
    {Name:"Akash",Age:22,Gender:"Male",City:"latur"},
    {Name:"Yash",Age:25,Gender:"Male",City:"pune"},
    {Name:"shreyash",Age:22,Gender:"Male",City:"mumbai"},
    {Name:"rushikesh",Age:22,Gender:"Male",City:"nashik"}
  ]

  constructor() { }
}
