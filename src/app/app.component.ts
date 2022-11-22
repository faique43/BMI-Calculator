import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BMIApp';

  public height!: number;
  public weight!: number;
  public bmi!: number;
  public comment: string = 'Check Your BMI.';
  public result!: string;

  bmiCal() {
    console.log(this.height);
    this.bmi = (this.weight / (this.height * this.height)) * 703;
    this.bmi = parseFloat(this.bmi.toFixed(1));
    if ((this.height <= 0 && this.weight <= 0) ||
    (typeof this.height !== 'number' && typeof this.weight !== 'number')) {
      this.bmi = -1;
    } else if (this.weight <= 0 || typeof this.weight !== 'number') {
      this.bmi = -2;
    } else if (
      this.height <= 0 || typeof this.height !== 'number'
    ) {
      this.bmi = -3;
    }

    if (this.bmi < 18.5) {
      this.comment = 'You are underweight.';
    } else if (this.bmi < 24.9 && this.bmi > 18.5) {
      this.comment = 'You are healthy.';
    } else if (this.bmi < 29.9 && this.bmi > 24.9) {
      this.comment = 'You are overweight.';
    } else if (this.bmi > 29.9) {
      this.comment = 'You are obese.';
    }

    if (this.bmi === -3) {
      this.result = 'Invalid Height.';
    } else if (this.bmi === -2) {
      this.result = 'Invalid Weight.';
    } else if (this.bmi === -1) {
      this.result = 'Invalid Height and Weight.';
    } else {
      this.result = this.bmi.toString();
    }
  }
}
