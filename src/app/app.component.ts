import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'backgroundColor';
  color = `rgb(248, 248, 248)`;
 public red: number;
 public green: number;
 public blue: number;

  generator() {
    this.red = Math.floor(Math.random() * 255);
    this.green = Math.floor(Math.random() * 255);
    this.blue = Math.floor(Math.random() * 255);

  }


  changer() {
    this.generator();
    return this.color = `rgb(${this.red},${this.green},${this.blue})`;


  }

}
