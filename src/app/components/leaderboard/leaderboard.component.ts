import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  students = [
    {
      name: 'Student 1',
      grade: 'grade',
      score: '12345',
      background: '#FFF0E1',
    },
    {
      name: 'Student 2',
      grade: 'grade',
      score: '12345',
      background: '#E9E3FF'

    },
    {
      name: 'Student 3',
      grade: 'grade',
      score: '12345',
      background: '#E5F3FF'
    },
    {
      name: 'Student 4',
      grade: 'grade',
      score: '12345',
      background: '#FFF0E1',
    }
  ]
}
