import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemsComponent } from './create-items.component';

describe('CreateItemsComponent', () => {
  let component: CreateItemsComponent;
  let fixture: ComponentFixture<CreateItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
