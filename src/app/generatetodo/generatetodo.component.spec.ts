import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratetodoComponent } from './generatetodo.component';

describe('GeneratetodoComponent', () => {
  let component: GeneratetodoComponent;
  let fixture: ComponentFixture<GeneratetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratetodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
