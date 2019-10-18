import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-line-chart',
  styles: ['agm-map { height: 800px; /* height is required */ }'],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartData = [];
  public lineChartLabels = ['0', '1', '2', '2', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
      ]
    },
  };
  public lineChartColors = [
    {
      backgroundColor: 'rgba(148,159,177,0)',
      borderColor: '#66e276'
    },
    {
      backgroundColor: 'rgba(148,159,177,0)',
      borderColor: '#41d8e0'
    },
    {
      backgroundColor: 'rgba(148,159,177,0)',
      borderColor: '#41d8e0'
    },
    {
      backgroundColor: 'rgba(148,159,177,0)',
      borderColor: 'Red'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  // latitude = -28.68352;
  // longitude = -147.20785;
  // mapType = 'satellite';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:

    this.http.get('http://pc-0008:8080/v1/SalesHighway/EnquiryThroughput', this.options)
      .subscribe(data => {
      console.log(data);

      this.lineChartData = [
        { data: [
            data.Averages[0].Count,
            data.Averages[1].Count,
            data.Averages[2].Count,
            data.Averages[3].Count,
            data.Averages[4].Count,
            data.Averages[5].Count,
            data.Averages[6].Count,
            data.Averages[7].Count,
            data.Averages[8].Count,
            data.Averages[9].Count,
            data.Averages[10].Count,
            data.Averages[11].Count,
            data.Averages[12].Count,
            data.Averages[13].Count,
            data.Averages[14].Count,
            data.Averages[15].Count,
            data.Averages[16].Count,
            data.Averages[17].Count,
            data.Averages[18].Count,
            data.Averages[19].Count,
            data.Averages[20].Count,
            data.Averages[21].Count,
            data.Averages[22].Count,
            data.Averages[23].Count,
            data.Averages[0].Count
          ], label: 'Average'},
        { data: [
            data.Maximums[0].Count,
            data.Maximums[1].Count,
            data.Maximums[2].Count,
            data.Maximums[3].Count,
            data.Maximums[4].Count,
            data.Maximums[5].Count,
            data.Maximums[6].Count,
            data.Maximums[7].Count,
            data.Maximums[8].Count,
            data.Maximums[9].Count,
            data.Maximums[10].Count,
            data.Maximums[11].Count,
            data.Maximums[12].Count,
            data.Maximums[13].Count,
            data.Maximums[14].Count,
            data.Maximums[15].Count,
            data.Maximums[16].Count,
            data.Maximums[17].Count,
            data.Maximums[18].Count,
            data.Maximums[19].Count,
            data.Maximums[20].Count,
            data.Maximums[21].Count,
            data.Maximums[22].Count,
            data.Maximums[23].Count,
            data.Maximums[0].Count
          ], label: 'Maximum'},
        { data: [
            data.Minimums[0].Count,
            data.Minimums[1].Count,
            data.Minimums[2].Count,
            data.Minimums[3].Count,
            data.Minimums[4].Count,
            data.Minimums[5].Count,
            data.Minimums[6].Count,
            data.Minimums[7].Count,
            data.Minimums[8].Count,
            data.Minimums[9].Count,
            data.Minimums[10].Count,
            data.Minimums[11].Count,
            data.Minimums[12].Count,
            data.Minimums[13].Count,
            data.Minimums[14].Count,
            data.Minimums[15].Count,
            data.Minimums[16].Count,
            data.Minimums[17].Count,
            data.Minimums[18].Count,
            data.Minimums[19].Count,
            data.Minimums[20].Count,
            data.Minimums[21].Count,
            data.Minimums[22].Count,
            data.Minimums[23].Count,
            data.Minimums[0].Count
          ], label: 'Minimum'},
        { data: [
            data.Throughput[0].Count,
            data.Throughput[1].Count,
            data.Throughput[2].Count,
            data.Throughput[3].Count,
            data.Throughput[4].Count,
            data.Throughput[5].Count,
            data.Throughput[6].Count,
            data.Throughput[7].Count,
            data.Throughput[8].Count,
            data.Throughput[9].Count,
            data.Throughput[10].Count,
            data.Throughput[11].Count,
            data.Throughput[12].Count,
            data.Throughput[13].Count,
            data.Throughput[14].Count,
            data.Throughput[15].Count,
            data.Throughput[16].Count,
            data.Throughput[17].Count,
            data.Throughput[18].Count,
            data.Throughput[19].Count,
            data.Throughput[20].Count,
            data.Throughput[21].Count,
            data.Throughput[22].Count,
            data.Throughput[23].Count,
            data.Throughput[0].Count
          ], label: 'Throuhput'}
      ];
      console.log(this.lineChartData);
    });
    this.http.get('http://pc-0008:8080/v1.1/SalesHighway/Enquiries/Postcode/?StartDate=2019-09-01&EndDate=2019-10-01',  this.options)
      .subscribe(data => {
          console.log(data);
      });
  }

}
