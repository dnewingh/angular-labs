import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListingSelectorComponent } from './home-listing-selector.component';

describe('HomeListingSelectorComponent', () => {
  let component: HomeListingSelectorComponent;
  let fixture: ComponentFixture<HomeListingSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeListingSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeListingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
