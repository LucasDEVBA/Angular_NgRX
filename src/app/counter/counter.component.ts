import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counterValue: number = 0;

  incrementCount() {
    this.counterValue++;
  }
  decrementCount() {
    this.counterValue--;
  }
  resetCount() {
    this.counterValue = 0;
  }
}
