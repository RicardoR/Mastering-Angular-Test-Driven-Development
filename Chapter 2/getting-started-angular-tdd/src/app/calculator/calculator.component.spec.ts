import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

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

  it('should add two numbers correctly', () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it('should initialize result to 0', () => {
    calculator.ngOnInit();
    expect(calculator.result).toBe(0);
  });
});
