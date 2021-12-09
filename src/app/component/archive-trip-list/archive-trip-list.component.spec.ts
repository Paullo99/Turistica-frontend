import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTripListComponent } from './archive-trip-list.component';

describe('ArchiveTripListComponent', () => {
  let component: ArchiveTripListComponent;
  let fixture: ComponentFixture<ArchiveTripListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveTripListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
