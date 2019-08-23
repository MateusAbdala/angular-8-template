import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeHeaderComponent } from './clube-header.component';

describe('ClubeHeaderComponent', () => {
  let component: ClubeHeaderComponent;
  let fixture: ComponentFixture<ClubeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
