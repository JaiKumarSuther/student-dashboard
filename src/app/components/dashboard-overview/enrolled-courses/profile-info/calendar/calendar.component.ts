import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  currentYear: number;
  currentMonth: number;
  daysOfMonth: { day: number | null, isCurrentMonth: boolean }[] = [];
  time: string = '';
  date: string = '';

  constructor() {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth();
  }

  ngOnInit(): void {
    this.generateCalendar(this.currentMonth, this.currentYear);
    this.updateDateTime();
  }

  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  getFebDays(year: number): number {
    return this.isLeapYear(year) ? 29 : 28;
  }

  generateCalendar(month: number, year: number): void {
    const daysInMonth = [
      31, this.getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
    
    const firstDay = new Date(year, month, 1).getDay(); // Get first day of current month
    const prevMonthDays = month === 0 ? daysInMonth[11] : daysInMonth[month - 1]; // Previous month days
    const totalDays = daysInMonth[month]; // Current month days

    this.daysOfMonth = [];

    // Add previous month's days (empty spots before the first day of the current month)
    for (let i = firstDay - 1; i >= 0; i--) {
      this.daysOfMonth.push({ day: prevMonthDays - i, isCurrentMonth: false });
    }

    // Add current month's days
    for (let i = 1; i <= totalDays; i++) {
      this.daysOfMonth.push({ day: i, isCurrentMonth: true });
    }
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  updateDateTime(): void {
    const today = new Date();
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' } as const;
    this.date = new Intl.DateTimeFormat('en-US', optionsDate).format(today);

    setInterval(() => {
      const now = new Date();
      const optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric' } as const;
      this.time = new Intl.DateTimeFormat('en-US', optionsTime).format(now);
    }, 1000);
  }
}
