import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-completed-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-modules.component.html',
  styleUrl: './completed-modules.component.css'
})
export class CompletedModulesComponent {
  @ViewChildren('progressCircle') progressCircles!: QueryList<ElementRef>;
  completionData = [
    { title: 'Lessons', completed: 8, total: 8, color: '#FBAB5D', url: "https://cdn-icons-png.flaticon.com/512/2825/2825096.png" },
    { title: 'Projects', completed: 2, total: 8, color: '#FBAB5D', url: "https://static.thenounproject.com/png/1969751-200.png" },
    { title: 'Quizzes', completed: 5, total: 8, color: '#FBAB5D',url: "https://www.svgrepo.com/show/245649/test-exam.svg" }
  ];

  ngAfterViewInit() {
    this.progressCircles.forEach((circle, index) => {
      const data = this.completionData[index];
      this.animateProgressCircle(circle.nativeElement, data.completed, data.total, data.color);
    });
  }

  animateProgressCircle(circleElement: SVGSVGElement, completed: number, total: number, color: string) {
    const percentage = (completed / total) * 100;
    const circumference = 2 * Math.PI * 45; // 45 is the radius
    const offset = circumference - (percentage / 100) * circumference;
    const progressCircle = circleElement.querySelector('.progress-fill') as SVGCircleElement;

    let currentOffset = circumference;
    const step = (circumference - offset) / 60; // Adjust the speed by changing the divisor

    const interval = setInterval(() => {
      currentOffset -= step;
      progressCircle.style.strokeDashoffset = `${currentOffset}`;
      progressCircle.style.stroke = color;

      if (currentOffset <= offset) {
        clearInterval(interval);
      }
    }, 20);
}


}
