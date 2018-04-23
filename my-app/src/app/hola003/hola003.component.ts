import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola003',
  templateUrl: './hola003.component.html',
  styleUrls: ['./hola003.component.css']
})
export class Hola003Component implements OnInit {

  active: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  revert() {
    this.active = !this.active;
  }

}
