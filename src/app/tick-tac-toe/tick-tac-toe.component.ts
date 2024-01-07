import { Component } from '@angular/core';
import { SquareComponent } from './square/square.component';

@Component({
  selector: 'tick-tac-toe',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './tick-tac-toe.component.html',
  styleUrl: './tick-tac-toe.component.scss'
})
export class TickTacToeComponent {
  public squares: string[] = new Array(9).fill('');
  private _isXTurn: boolean = false;
  private _winningPatterns: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7]
  ];
  public status: string = '';
  public next: string = '';

  public handleClick(getCurrentSquare: number): void {
    let cpySquares = [...this.squares];
    if (this._getWinner(cpySquares) || this.squares[getCurrentSquare]) {
      return;
    }
    cpySquares[getCurrentSquare] = this._isXTurn ? "X" : "O";
    this._isXTurn = !this._isXTurn;
    this.squares = [...cpySquares];
    let winner = this._getWinner(this.squares);
    if(!winner && this.squares.every(item => item !== '')) {
      this.status = "This is draw please start the game!!";
      alert(this.status);
    } else if(winner){
      this.status = `${winner} is winner`;
      alert(this.status);
    } else {
      this.next = `Next player is ${this._isXTurn ? 'X' : 'O'}`;
    }
  }

  private _getWinner(squares: string[]): string | null {
    for(let i=0; i<this._winningPatterns.length; i++) {
      const [x, y, z]= this._winningPatterns[i];
      if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }

  public resetGame(): void {
    this.squares = new Array(9).fill('');
    this._isXTurn = false;
    this.status = '';
    this.next = '';
  }
}
