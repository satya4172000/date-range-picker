import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'; // Import the plugin for isBetween
import utc from 'dayjs/plugin/utc';
import { ToastrService } from 'ngx-toastr';
dayjs.extend(utc);
dayjs.extend(isBetween);


@Component({
  selector: 'app-date-range-selector',
  templateUrl: './date-range-selector.component.html',
  styleUrl: './date-range-selector.component.css'
})
export class DateRangeSelectorComponent implements OnInit{
  dateRangeForm!: FormGroup;
  startDate:any;
  endDate:any;
weekdaysMin = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

 monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//   locale={
//     format: 'YYYY-MM-DD', 
//     displayFormat: 'YYYY-MM-DD', 
//     direction: 'ltr', 
//     weekLabel: 'W',
//     separator: ' To ',
//     cancelLabel: 'Cancel', 
//     applyLabel: 'Okay',
//     clearLabel: 'Clear',
//     customRangeLabel: 'Custom range',
//     daysOfWeek: this.weekdaysMin,
//     monthNames: this.monthsShort,
//     firstDay: 1 
// }
  ranges: any = {
    'Today': [dayjs().format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
    'Yesterday': [dayjs().subtract(1, 'day').format('YYYY-MM-DD'), dayjs().subtract(1, 'day').format('YYYY-MM-DD')],
    'This Week (Mon - Today)': [dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
    'This Week (Sun - Today)': [dayjs().startOf('week').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
    'Last Week (Mon - Fri)': [dayjs().subtract(1, 'week').startOf('week').add(1, 'day').format('YYYY-MM-DD'), dayjs().subtract(1, 'week').endOf('week').subtract(1, 'day').format('YYYY-MM-DD')],
    'Last Week (Sun - Sat)': [dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'), dayjs().subtract(1, 'week').endOf('week').format('YYYY-MM-DD')],
    'Last 7 Days': [dayjs().subtract(6, 'days').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
    'Last 14 Days': [dayjs().subtract(13, 'days').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
    'This Month': [dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD')],
    'Last 30 Days': [dayjs().subtract(29, 'days').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
    'Last Month': [dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'), dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')],
    'This Year': [dayjs().startOf('year').format('YYYY-MM-DD'), dayjs().endOf('year').format('YYYY-MM-DD')],
    'Previous Year': [dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'), dayjs().subtract(1, 'year').endOf('year').format('YYYY-MM-DD')],
    'Custom Range': [dayjs().format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')] 
  };
  

  data: any[] = [
    { id: 1, date: '2024-08-01', value: 10 },
    { id: 2, date: '2024-07-25', value: 20 },
    { id: 3, date: '2024-06-15', value: 30 },
    { id: 4, date: '2024-05-10', value: 40 },
    { id: 5, date: '2024-08-08', value: 50 },
    { id: 5, date: '2024-08-09', value: 90 },
    { id: 6, date: '2024-07-18', value: 60 },
    { id: 7, date: '2024-04-22', value: 70 },
    { id: 8, date: '2024-03-30', value: 80 },
    { id: 9, date: '2024-01-01', value: 90 },
    { id: 10, date: '2023-12-15', value: 100 },
  ];

  filteredData: any[] = [];

  constructor(private fb: FormBuilder, private alert:ToastrService) {}

  ngOnInit(): void {
    this.dateRangeForm = this.fb.group({
      selected: [[dayjs().startOf('day').format('YYYY-MM-DD'), dayjs().endOf('day').format('YYYY-MM-DD')]]
    });
  
    
    this.dateRangeForm.get('selected')?.valueChanges.subscribe((range: any) => {
      
      this.filterData(range);
    });
  
   
    const initialRange = this.dateRangeForm.get('selected')?.value;
     
    this.filterData(initialRange);
  }
  
  filterData(range: any) {
    if ((range && range.startDate && range.endDate) || range.length>0) {
      if(range.length>0){
        this.startDate = range[0];
        this.endDate = range[1];
      }else{
        this.startDate = dayjs(range.startDate).startOf('day').format('YYYY-MM-DD');
        this.endDate = dayjs(range.endDate).endOf('day').format('YYYY-MM-DD');
      }

      this.filteredData = this.data.filter(item => {
        const itemDate = dayjs(item.date);
        return itemDate.isBetween(this.startDate, this.endDate, null, '[]');
      });
    } else {
      this.alert.error('Invalid range format:', range); 
    }
  }
  
}
