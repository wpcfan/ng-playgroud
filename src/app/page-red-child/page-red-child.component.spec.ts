import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRedChildComponent } from './page-red-child.component';

describe('PageRedChildComponent', () => {
  let component: PageRedChildComponent;
  let fixture: ComponentFixture<PageRedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRedChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
