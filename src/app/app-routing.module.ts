import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDirComponent } from './custom-dir/custom-dir.component';
import { ParentComponent } from './viewchild/parent/parent.component';

const routes: Routes = [
  {path:"custom-dir",component:CustomDirComponent},
  {path:"parent",component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
