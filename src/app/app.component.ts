import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMIApp';

  public height!: number;
  public weight!:number;
  public bmi!:number;
  public comment:string = "Check Your BMI.";

  bmiCal(){

      this.bmi = (this.weight/(this.height * this.height)) * 703;
      this.bmi = parseFloat(this.bmi.toFixed(1));
      if (this.bmi < 18.5) {
        this.comment = "You are underweight."
      }else if (this.bmi < 24.9 && this.bmi > 18.5) {
        this.comment = "You are healthy."
      }else if (this.bmi < 29.9 && this.bmi > 24.9) {
        this.comment = "You are overweight."
      }else if (this.bmi > 29.9) {
        this.comment = "You are obese."
      }
    }
  }

