import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeimageComponent } from './aboutmeimage.component';

describe('AboutmeimageComponent', () => {
  let component: AboutmeimageComponent;
  let fixture: ComponentFixture<AboutmeimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
