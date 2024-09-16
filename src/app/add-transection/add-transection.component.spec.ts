import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransectionComponent } from './add-transection.component';

describe('AddTransectionComponent', () => {
  let component: AddTransectionComponent;
  let fixture: ComponentFixture<AddTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTransectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
