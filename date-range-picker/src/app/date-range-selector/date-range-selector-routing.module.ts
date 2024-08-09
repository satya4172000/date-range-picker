import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateRangeSelectorComponent } from './date-range-selector/date-range-selector.component';

const routes: Routes = [
  {path:'date-range-selector', component:DateRangeSelectorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateRangeSelectorRoutingModule { }
