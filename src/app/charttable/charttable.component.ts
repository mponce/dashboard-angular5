import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-charttable',
  templateUrl: './charttable.component.html',
  styleUrls: ['./charttable.component.scss']
})
export class CharttableComponent implements OnInit {

  tableData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTableData().subscribe(data => this.tableData = data);
  }

}
