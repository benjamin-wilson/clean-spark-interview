import { AnonymousSubscription } from 'rxjs/Subscription';
import { Subscribable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { ChartPoint, DataPointService } from '../../shared';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  chartPoints: any = [];

  constructor(public dataPointService: DataPointService) {
    dataPointService.chartPoints.subscribe((chartPonts: ChartPoint[]) => {
      this.yAxisLabel = dataPointService.lastQueriedTag ? dataPointService.lastQueriedTag.unit : '';
      if (chartPonts.length > 0) {
        this.chartPoints = [{
          name: 'Line',
          series: chartPonts
        }];
      }
    });
  }

  ngOnInit() {

  }

  onSelect(event) {
    console.log(event);
  }

}
