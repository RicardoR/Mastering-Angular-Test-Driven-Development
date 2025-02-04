import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../../core/services/calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  result!: number;
  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.result = 0;
  }

  add(a: number, b: number): void {
    this.result = this.calculatorService.add(a, b);
  }

  subtract(a: number, b: number): void {
    this.result = this.calculatorService.subtract(a, b);
  }
}
