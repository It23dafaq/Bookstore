import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPreviewComponent } from './star-preview.component';

describe('StarPreviewComponent', () => {
  let component: StarPreviewComponent;
  let fixture: ComponentFixture<StarPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
