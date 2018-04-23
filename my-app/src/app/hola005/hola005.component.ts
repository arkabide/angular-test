import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola005',
  templateUrl: './hola005.component.html',
  styleUrls: ['./hola005.component.css']
})
export class Hola005Component implements OnInit {

  words: string[] = ["one", "two", "three", "o'clock"];
  constructor() { }

  ngOnInit() {
  }

}
