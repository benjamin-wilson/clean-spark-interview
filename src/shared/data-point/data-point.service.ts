import { ChartPoint } from './ChartPoint';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IDataPoint } from './IDataPoint';
import { BehaviorSubject } from 'rxjs/Rx';
import { ITag } from '../';

@Injectable()
export class DataPointService {

  public lastQueriedTag: ITag;
  public chartPoints: BehaviorSubject<ChartPoint[]> = new BehaviorSubject<ChartPoint[]>([]);
  constructor(private http: Http) { }

  public getData(tag: ITag, startTS: Date, endTS: Date) {
    this.http.get('/api/DataPoint/' + tag.tagId + '?startTS=' + startTS.toISOString() + '&endTS=' + endTS.toISOString())
      .map(res => res = res.json())
      .subscribe((dataPoints: IDataPoint[]) => {
        this.lastQueriedTag = tag;
        this.proccessDataPoints(dataPoints);

      });

  }

  public proccessDataPoints(dataPoints: IDataPoint[]) {
    const tempChartPoints = [];
    dataPoints.forEach((dataPoint: IDataPoint) => {
      const chartPoint = new ChartPoint();
      chartPoint.name = new Date(dataPoint.observationTS);
      chartPoint.value = dataPoint.value;
      tempChartPoints.push(chartPoint);
    });

    this.chartPoints.next(tempChartPoints);
  }
}
