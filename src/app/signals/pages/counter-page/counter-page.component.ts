import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent {

  counter = signal(10);
  squareCounter = computed( () => this.counter() * this.counter());

  increaseBy(value:number){
    this.counter.update(count => count + value);
  }
}
