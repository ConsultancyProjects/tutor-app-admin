import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {

   gridApi: any;
   gridColumnApi: any;

   columnDefs: any;
   defaultColDef: any;
   rowData: [];

  constructor(private categoryService: CategoryService, private http: HttpClient) {
    console.log('test test');
    this.columnDefs = [
      { field: 'athlete' },
      {
        field: 'age',
        filter: 'agNumberColumnFilter',
        maxWidth: 100,
      },
      {
        field: 'date',
        filter: 'agDateColumnFilter',
        filterParams: filterParams,
      },
      {
        field: 'total',
        filter: false,
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      filter: true,
    };
  }
  ngOnInit(): void {
    
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => params.api.setRowData(data));
  }
}

var filterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
};
