import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToySelector001Component } from './toy-selector-001.component';

describe('ToySelector001Component', () => {
  let component: ToySelector001Component;
  let fixture: ComponentFixture<ToySelector001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToySelector001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToySelector001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
