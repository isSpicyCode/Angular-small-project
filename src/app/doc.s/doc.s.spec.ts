import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocS } from './doc.s';

describe('DocS', () => {
  let component: DocS;
  let fixture: ComponentFixture<DocS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
