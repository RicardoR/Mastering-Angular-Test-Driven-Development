import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import {CalculatorService} from "../../core/services/calculator.service";

describe('CalculatorComponent', () => {
  let calculator: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      providers: [ CalculatorService ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    calculator = fixture.componentInstance;
    calculatorService = TestBed.inject(CalculatorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(calculator).toBeTruthy();
  });

  it('should initialize result to 0', () => {
    calculator.ngOnInit();
    expect(calculator.result).toBe(0);
  });

  it('should add two numbers correctly', () => {
    spyOn(calculatorService, 'add').and.callThrough();
    calculator.add(2,3);
    expect(calculatorService.add).toHaveBeenCalledWith(2,3);
    expect(calculator.result).toBe(5);
  });

  it('should subtract two numbers correctly', () => {
    spyOn(calculatorService, 'subtract').and.callThrough();
    calculator.subtract(3,2);
    expect(calculatorService.subtract).toHaveBeenCalledWith(3,2);
    expect(calculator.result).toBe(1);
  });

  it('should multiply two numbers correctly', () => {
    spyOn(calculatorService, 'multiply').and.callThrough();
    calculator.multiply(3,2);
    expect(calculatorService.multiply).toHaveBeenCalledWith(3,2);
    expect(calculator.result).toBe(6);
  });

  it('should divide two numbers correctly', () => {
    spyOn(calculatorService, 'divide').and.callThrough();
    calculator.divide(3,2);
    expect(calculatorService.divide).toHaveBeenCalledWith(3,2);
    expect(calculator.result).toBe(6);
  });
});
