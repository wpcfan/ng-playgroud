import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGreenComponent } from './page-green.component';

describe('PageGreenComponent', () => {
  let component: PageGreenComponent;
  let fixture: ComponentFixture<PageGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
