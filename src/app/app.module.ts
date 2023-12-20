import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirComponent } from './custom-dir/custom-dir.component';
import { CustomDirective } from './custom/custom.directive';
import { ParentComponent } from './viewchild/parent/parent.component';
import { ChildComponent } from './viewchild/child/child.component';
// import { DataService } from './service/data.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirComponent,
    CustomDirective,
    ParentComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
