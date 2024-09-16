import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransectionComponent } from './edit-transection.component';

describe('EditTransectionComponent', () => {
  let component: EditTransectionComponent;
  let fixture: ComponentFixture<EditTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTransectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
