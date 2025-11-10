import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<{counter: CounterState}>
  ) {}

  counter: number = 0;
  counterSubscription: Subscription | null = null;

  ngOnInit() {
    this.counterSubscription = this.store.select('counter').subscribe(state => {
      this.counter = state.counter;
    });
  }

  ngOnDestroy() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
