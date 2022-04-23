import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmetextComponent } from './aboutmetext.component';

describe('AboutmetextComponent', () => {
  let component: AboutmetextComponent;
  let fixture: ComponentFixture<AboutmetextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmetextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
