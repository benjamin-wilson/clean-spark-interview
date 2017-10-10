import { TagService, ITag, DataPointService } from '../shared';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public availableTags: ITag[];
  public selectedTag: ITag;

  public startDateDttm: Date;
  public endDateDttm: Date;

  public maxDate: Date;
  public minDate: Date;

  constructor(public tagService: TagService, public dataPointService: DataPointService) {
    this.maxDate = new Date('10/15/2017');
    this.minDate = new Date('09/01/2016');

    this.endDateDttm = new Date();
    this.startDateDttm = new Date();
    this.startDateDttm.setHours(this.startDateDttm.getHours() - 48);
  }

  public featureChanged(value) {
    this.selectedTag = null;
    this.availableTags = this.tagService.getTagsByFeature(value);
  }

  public submit() {
    this.dataPointService.getData(this.selectedTag, this.startDateDttm, this.endDateDttm);
  }

  public startDateChange(date) {
    this.startDateDttm = date;
  }

  public endDateChange(date) {
    this.endDateDttm = date;
  }
}
