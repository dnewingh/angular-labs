import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsChildAddItemComponent } from './items-child-add-item.component';

describe('ItemsChildAddItemComponent', () => {
  let component: ItemsChildAddItemComponent;
  let fixture: ComponentFixture<ItemsChildAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsChildAddItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsChildAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
