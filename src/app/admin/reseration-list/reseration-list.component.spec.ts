import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserationListComponent } from './reseration-list.component';

describe('ReserationListComponent', () => {
  let component: ReserationListComponent;
  let fixture: ComponentFixture<ReserationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
