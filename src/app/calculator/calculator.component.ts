import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  output: number;
  firstnumber = 0;
  secondnumber = 0;
  operator = '+';

  onFirstChange(value) {
    this.firstnumber = Number(value);
  }
  onSecondChange(value) {
    this.secondnumber = Number(value);
  }
  onOperatorChange(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.firstnumber + this.secondnumber;
        break;
      case '-':
        this.output = this.firstnumber - this.secondnumber;
        break;
      case '*':
        this.output = this.firstnumber * this.secondnumber;
        break;
      case '/':
        this.output = this.firstnumber / this.secondnumber;
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}