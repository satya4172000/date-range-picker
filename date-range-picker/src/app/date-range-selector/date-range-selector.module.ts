import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeSelectorComponent } from './date-range-selector/date-range-selector.component';
import { SharedModule } from '../shared/shared.module';
import { DateRangeSelectorRoutingModule } from './date-range-selector-routing.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    DateRangeSelectorComponent
  ],
  imports: [
    DateRangeSelectorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    NgxDaterangepickerMd,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule
  ]
})
export class DateRangeSelectorModule { }
