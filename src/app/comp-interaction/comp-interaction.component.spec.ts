import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInteractionComponent } from './comp-interaction.component';

describe('CompInteractionComponent', () => {
  let component: CompInteractionComponent;
  let fixture: ComponentFixture<CompInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
