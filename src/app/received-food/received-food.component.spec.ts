import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedFoodComponent } from './received-food.component';

describe('ReceivedFoodComponent', () => {
  let component: ReceivedFoodComponent;
  let fixture: ComponentFixture<ReceivedFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivedFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
