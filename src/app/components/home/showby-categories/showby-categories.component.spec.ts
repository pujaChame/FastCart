import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbyCategoriesComponent } from './showby-categories.component';

describe('ShowbyCategoriesComponent', () => {
  let component: ShowbyCategoriesComponent;
  let fixture: ComponentFixture<ShowbyCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowbyCategoriesComponent]
    });
    fixture = TestBed.createComponent(ShowbyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
