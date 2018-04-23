import { Component, OnInit } from '@angular/core';
import { Person } from '../model/Person'

@Component({
  selector: 'app-hola004',
  templateUrl: './hola004.component.html',
  styleUrls: ['./hola004.component.css']
})
export class Hola004Component implements OnInit {

  me: Person;

  constructor() {
    this.me = new Person('Peter', 'Rabbit', 2);
  }

  ngOnInit() {
  }

}
