import { IDataPoint } from './IDataPoint';
import { TestBed, inject } from '@angular/core/testing';

import { DataPointService } from './data-point.service';

import { HttpModule } from '@angular/http';

describe('DataPointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPointService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([DataPointService], (service: DataPointService) => {
    expect(service).toBeTruthy();
  }));

  it('should create chart points from data points', inject([DataPointService], (service: DataPointService) => {
    const dataPoints: IDataPoint[] = [{
      observationTS : '2017-10-10T03:22:02Z',
      tagId : 'Tag1',
      value : 0.76244251101145177,
      quality : null
    }, {
      observationTS : '2017-10-10T03:21:03Z',
      tagId : 'Tag1',
      value : 0.76649300680933752,
      quality : null
    }];
    service.proccessDataPoints(dataPoints);

    expect(service.chartPoints.value.length).toBe(2);
    expect(service.chartPoints.value[0].name.getTime()).toBe(new Date('2017-10-10T03:22:02Z').getTime());
    expect(service.chartPoints.value[0].value).toBe(0.76244251101145177);
    expect(service.chartPoints.value[1].name.getTime()).toBe(new Date('2017-10-10T03:21:03Z').getTime());
    expect(service.chartPoints.value[1].value).toBe(0.76649300680933752);
  }));
});
