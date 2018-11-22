import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOdoViewComponent } from './todo-view.component';

describe('TOdoViewComponent', () => {
  let component: TOdoViewComponent;
  let fixture: ComponentFixture<TOdoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOdoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOdoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
