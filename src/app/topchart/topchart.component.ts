import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-topchart',
  templateUrl: './topchart.component.html',
  styleUrls: ['./topchart.component.scss']
})
export class TopchartComponent implements OnInit {

  chartData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getChartData().subscribe(res => {
        console.log(res);
    })
  }

}
