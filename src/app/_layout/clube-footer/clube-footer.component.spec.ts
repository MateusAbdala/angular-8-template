import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeFooterComponent } from './clube-footer.component';

describe('ClubeFooterComponent', () => {
  let component: ClubeFooterComponent;
  let fixture: ComponentFixture<ClubeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClubeFooterComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
