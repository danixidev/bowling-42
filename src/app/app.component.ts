import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Round {
  index: number,
  first: number,
  second: number,
  third: number,
  total: number
}

interface Player {
  name: string,
  color: string,
  rounds: Round[],
  last_score: number
}
interface Game {
  round: number,
  totalScore: number,
  players: Player[]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bowling-42';
}
