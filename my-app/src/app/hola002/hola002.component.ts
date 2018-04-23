import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola002',
  templateUrl: './hola002.component.html',
  styleUrls: ['./hola002.component.css']
})
export class Hola002Component implements OnInit {

  count: number;
  counts: number[];

  constructor() {
    this.count = 0;
    this.counts = [];
  }

  getCounts(): number[] {
    if (this.count < 0) {
      return [];
    }
    return Array(this.count).fill(0).map((x, i) => i);
  }

  ngOnInit() {
  }

  alertCount() {
    alert("Count value:" + this.count);
  }

  increment() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  update(count: number) {
    this.count += count;
  }

}
