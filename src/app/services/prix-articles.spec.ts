import { TestBed } from '@angular/core/testing';

import { PrixArticles } from './prix-articles';

describe('PrixArticles', () => {
  let service: PrixArticles;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrixArticles);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
