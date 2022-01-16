import { Component, OnInit } from '@angular/core';
import { TimeTableService } from 'src/app/shared';

@Component({
  selector: 'app-today-class',
  templateUrl: './today-class.component.html',
  styleUrls: ['./today-class.component.scss']
})
export class TodayClassComponent implements OnInit {

  constructor(private timeTableService: TimeTableService) { }

  ngOnInit(): void {
    let varr = this.timeTableService.getTimeTableByDate((new Date()).getTime()+"").subscribe({
      next: (data) => {
        console.log(data);
      }, 
      error: (error) => {

      }
    })
    console.log('');
  }

}
