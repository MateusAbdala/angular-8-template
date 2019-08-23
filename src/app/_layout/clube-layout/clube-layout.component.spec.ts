import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeLayoutComponent } from './clube-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ClubeHeaderComponent } from '../clube-header/clube-header.component';
import { ClubeFooterComponent } from '../clube-footer/clube-footer.component';

describe('ClubeLayoutComponent', () => {
  let component: ClubeLayoutComponent;
  let fixture: ComponentFixture<ClubeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ClubeLayoutComponent,
        ClubeHeaderComponent,
        ClubeFooterComponent
      ]
    }).compileComponents();
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
