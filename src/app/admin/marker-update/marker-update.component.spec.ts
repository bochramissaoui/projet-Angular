import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerUpdateComponent } from './marker-update.component';

describe('MarkerUpdateComponent', () => {
  let component: MarkerUpdateComponent;
  let fixture: ComponentFixture<MarkerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
