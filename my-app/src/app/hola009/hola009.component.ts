import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola009',
  templateUrl: './hola009.component.html',
  styleUrls: ['./hola009.component.css']
})
export class Hola009Component implements OnInit {

  strArr: string[] = ["hi", "there", "how", "y'doin'"];
  selected: string;

  constructor() { }

  ngOnInit() {
  }

}
