import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeLayoutComponent } from './clube-layout.component';

describe('ClubeLayoutComponent', () => {
  let component: ClubeLayoutComponent;
  let fixture: ComponentFixture<ClubeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
