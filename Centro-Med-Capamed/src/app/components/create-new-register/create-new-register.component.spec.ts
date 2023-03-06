import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewRegisterComponent } from './create-new-register.component';

describe('CreateNewRegisterComponent', () => {
  let component: CreateNewRegisterComponent;
  let fixture: ComponentFixture<CreateNewRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
