import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  result!: number;
  constructor() {}

  ngOnInit(): void {
    this.result = 0;
  }

  add(a: number, b: number): number {
    return a + b;
  }
}
