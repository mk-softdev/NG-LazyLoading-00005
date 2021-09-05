import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      Counter works!
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  public counter : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incerement(){
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
