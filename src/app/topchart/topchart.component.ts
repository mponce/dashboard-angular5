import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-topchart',
  templateUrl: './topchart.component.html',
  styleUrls: ['./topchart.component.scss']
})
export class TopchartComponent implements OnInit {

  chart = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getChartData()
      .subscribe((data) => { 
        this.buildChart(data);
      });
  }

  buildChart(chartData) {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets: [{
            data: chartData.serie1,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
