import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  tableData = [
    {
      "field1": 1001,
      "field2": "Lorem",
      "field3": "ipsum",
      "field4": "dolor",
      "field5": "sit"
    },
    {
      "field1": 1002,
      "field2": "Lorem",
      "field3": "ipsum",
      "field4": "dolor",
      "field5": "sit"
    }
  ];

  getTableData() {
    return this.tableData;
  }

}
