import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola012',
  templateUrl: './hola012.component.html',
  styleUrls: ['./hola012.component.css']
})
export class Hola012Component implements OnInit {

  show: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  revert() {
    this.show = !this.show;
  }
}
