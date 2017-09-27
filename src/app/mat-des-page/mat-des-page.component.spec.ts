import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDesPageComponent } from './mat-des-page.component';

describe('MatDesPageComponent', () => {
  let component: MatDesPageComponent;
  let fixture: ComponentFixture<MatDesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
