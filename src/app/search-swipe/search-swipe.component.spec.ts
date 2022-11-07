import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSwipeComponent } from './search-swipe.component';

describe('SearchSwipeComponent', () => {
  let component: SearchSwipeComponent;
  let fixture: ComponentFixture<SearchSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSwipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
