import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsComponent } from './top-deals.component';

describe('TopDealsComponent', () => {
  let component: TopDealsComponent;
  let fixture: ComponentFixture<TopDealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDealsComponent]
    });
    fixture = TestBed.createComponent(TopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
