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

  bmiCal(){

      this.bmi = (this.weight/(this.height * this.height)) * 703;
      this.bmi = parseFloat(this.bmi.toFixed(1));
    }
  }

