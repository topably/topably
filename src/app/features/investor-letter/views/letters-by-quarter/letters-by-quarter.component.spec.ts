import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersByQuarterComponent } from './letters-by-quarter.component';

describe('LettersByQuarterComponent', () => {
  let component: LettersByQuarterComponent;
  let fixture: ComponentFixture<LettersByQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersByQuarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersByQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
