/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SamProfileSectionService } from './sam-profile-section.service';

describe('SamProfileSectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamProfileSectionService]
    });
  });

  it('should ...', inject([SamProfileSectionService], (service: SamProfileSectionService) => {
    expect(service).toBeTruthy();
  }));
});
