import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaDelComponent } from './tema-del.component';

describe('TemaDelComponent', () => {
  let component: TemaDelComponent;
  let fixture: ComponentFixture<TemaDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
