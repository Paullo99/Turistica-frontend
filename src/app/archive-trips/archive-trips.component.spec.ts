import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTripsComponent } from './archive-trips.component';

describe('ArchiveTripsComponent', () => {
  let component: ArchiveTripsComponent;
  let fixture: ComponentFixture<ArchiveTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
