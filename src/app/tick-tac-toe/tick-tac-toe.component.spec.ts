import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickTacToeComponent } from './tick-tac-toe.component';

describe('TickTacToeComponent', () => {
  let component: TickTacToeComponent;
  let fixture: ComponentFixture<TickTacToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TickTacToeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TickTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
