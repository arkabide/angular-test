import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola007',
  templateUrl: './hola007.component.html',
  styleUrls: ['./hola007.component.css']
})
export class Hola007Component implements OnInit {

  options: string[] = [];
  selected: string;

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.options.push("option " + (i + 1));
    }
  }

  checked(str: string) {
    this.selected = str;
  }

  ngOnInit() {
  }

}
