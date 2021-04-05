import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDelComponent } from './post-del.component';

describe('PostDelComponent', () => {
  let component: PostDelComponent;
  let fixture: ComponentFixture<PostDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
