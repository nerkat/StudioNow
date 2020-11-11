import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsListComponent } from './talents-list.component';

describe('TalentsListComponent', () => {
  let component: TalentsListComponent;
  let fixture: ComponentFixture<TalentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
