import { Component, OnInit } from '@angular/core';
import { Person } from '../model/Person';

@Component({
  selector: 'app-hola010',
  templateUrl: './hola010.component.html',
  styleUrls: ['./hola010.component.css']
})
export class Hola010Component implements OnInit {

  persons: Person[] = [];
  selected: Person;

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.persons.push(new Person("Name-" + i, "Surname-" + i, i));
    }
  }

  ngOnInit() {
  }

}
