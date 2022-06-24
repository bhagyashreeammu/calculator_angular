import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator_angular';
  toshow = '0'
  currvalue = ''

  insertNum(value: string) {
    this.currvalue = this.currvalue + value
    this.toshow = this.currvalue
  }


  //function for evaluation
  solve() {

    let x = (<HTMLInputElement>document.getElementById("cal")).value
    let y: any = eval(x);
    (<HTMLInputElement>document.getElementById("cal")).value = y;
  }


  //function for clearing the display
  clr() {
    this.currvalue = ''
    this.toshow = '0'
  }

  back() {
    let x: number = parseInt((<HTMLInputElement>document.getElementById("cal")).value);

    (<HTMLInputElement>document.getElementById("cal")).value = (Math.floor(x / 10)).toString();
  }

  SR(): void {
    let x: any = document.getElementsByClassName("textview");
    let y = Math.sqrt(parseInt(x[0].value));
    x[0].value = y;
  }
  calcvalue(solve: any) {
    this.toshow = eval(solve)
  }
}
