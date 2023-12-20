import { Component, OnInit ,ViewChildren ,QueryList} from '@angular/core';
// import { CustomDirective } from '../custom/custom.directive';
import { DataService } from '../service/data.service';
import { CustomDirective } from '../custom/custom.directive';


@Component({
  selector: 'app-custom-dir',
  templateUrl: './custom-dir.component.html',
  styleUrls: ['./custom-dir.component.css']
})
export class CustomDirComponent implements OnInit {

  edata:any;
  

  // @ViewChildren(CustomDirective) dta: CustomDirective | undefined

  @ViewChildren(CustomDirective) colors: QueryList<CustomDirective> | undefined

  


  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.edata=this.data?.Data
  }

  getcol(x:string){
    this.colors?.forEach(c=>{
      c.getcolor(x)
    })
  }

}
