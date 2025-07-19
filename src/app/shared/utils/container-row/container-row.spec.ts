import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRow } from './container-row';

describe('ContainerRow', () => {
  let component: ContainerRow;
  let fixture: ComponentFixture<ContainerRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
