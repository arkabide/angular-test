import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola001',
  templateUrl: './hola001.component.html',
  styleUrls: ['./hola001.component.css']
})
export class Hola001Component implements OnInit {

  message: string;
  amount: number;
  urlImage: string;

  constructor() {
    this.message = 'hi from typescript';
    this.amount = 100;
    this.urlImage = 'assets/duck.png';
  }

  ngOnInit() {
  }

  calculateVat(): number {
    return this.amount * 1.21;
  }

}
