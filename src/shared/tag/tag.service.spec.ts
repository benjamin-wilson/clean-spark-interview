import { TestBed, inject } from '@angular/core/testing';

import { TagService } from './tag.service';

import { HttpModule } from '@angular/http';

describe('TagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([TagService], (service: TagService) => {
    expect(service).toBeTruthy();
  }));

  it('should setup features without duplicates', inject([TagService], (service: TagService) => {

    const tags = [{
      tagId: 'Tag1',
      label: 'Power at Meter 1',
      dataType: 'double',
      unit: 'kW',
      isTransient: false,
      features: ['power', 'meter', 'load', 'consumption']
    }, {
      tagId: 'Tag2',
      label: 'Unit 1 Online Status',
      dataType: 'boolean',
      unit: 'Status',
      isTransient: true,
      features: ['status', 'unit']
    }, {
      tagId: 'Tag3',
      label: 'Pump 1 Running',
      dataType: 'string',
      unit: 'Status',
      isTransient: false,
      features: ['status', 'pump', 'consumption']
    }, {
      tagId: 'Tag4',
      label: 'Meter 1 Voltage',
      dataType: 'integer',
      unit: 'V',
      isTransient: false,
      features: ['meter']
    }
    ];
    service.setupModel(tags);

    expect(service.features.length).toBe(7);
  }));

  it('should get correct Tags by Feature', inject([TagService], (service: TagService) => {

    const tags = [{
      tagId: 'Tag1',
      label: 'Power at Meter 1',
      dataType: 'double',
      unit: 'kW',
      isTransient: false,
      features: ['power', 'meter', 'load', 'consumption']
    }, {
      tagId: 'Tag2',
      label: 'Unit 1 Online Status',
      dataType: 'boolean',
      unit: 'Status',
      isTransient: true,
      features: ['status', 'unit']
    }, {
      tagId: 'Tag3',
      label: 'Pump 1 Running',
      dataType: 'string',
      unit: 'Status',
      isTransient: false,
      features: ['status', 'pump', 'consumption']
    }, {
      tagId: 'Tag4',
      label: 'Meter 1 Voltage',
      dataType: 'integer',
      unit: 'V',
      isTransient: false,
      features: ['meter']
    }
    ];
    service.setupModel(tags);

    const tagsByFeature = service.getTagsByFeature('power');
    expect(tagsByFeature.length).toBe(1);
    expect(tagsByFeature[0].tagId).toBe('Tag1');
  }));
});
