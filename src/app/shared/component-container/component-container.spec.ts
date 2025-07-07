import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentContainer } from './component-container';

describe('ComponentContainer', () => {
  let component: ComponentContainer;
  let fixture: ComponentFixture<ComponentContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
