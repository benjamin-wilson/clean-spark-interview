import { retry } from 'rxjs/operator/retry';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';

import { ITag } from './ITag';

@Injectable()
export class TagService {

  get tags(): ITag[] {
    return this._tags.value;
  }
  get features(): string[] {
    return this._features.value;
  }
  private _tags: BehaviorSubject<ITag[]> = new BehaviorSubject<ITag[]>([]);
  private _features: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor(private http: Http) {
    this.getTags();
  }

  private getTags() {
    this.http.get('/api/Tag')
      .map(res => res = res.json())
      .subscribe((tags: ITag[]) => {
        this.setupModel(tags);
      });
  }

  public setupModel(tags: ITag[]) {
    this._tags.next(tags);
    const features = [];
    tags.forEach((tag: ITag) => {
      if (Array.isArray(tag.features)) {
        tag.features.forEach((feature: string) => {
          if (features.indexOf(feature) === -1) {
            features.push(feature);
          }
        });
      }
    });
    this._features.next(features);
  }

  public getTagsByFeature(feature: string): ITag[] {
    return this.tags.filter((tag: ITag) => {
      return Array.isArray(tag.features) && tag.features.indexOf(feature) > -1;
    });
  }
}
