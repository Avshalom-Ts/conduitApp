import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBanerComponent } from './home-baner.component';

describe('HomeBanerComponent', () => {
  let component: HomeBanerComponent;
  let fixture: ComponentFixture<HomeBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
