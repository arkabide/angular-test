import { Component, OnInit } from '@angular/core';
import { Person } from '../model/Person'

@Component({
  selector: 'app-hola006',
  templateUrl: './hola006.component.html',
  styleUrls: ['./hola006.component.css']
})
export class Hola006Component implements OnInit {

  persons: Person[] = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.persons.push(new Person("Name-" + i, "Surname-" + i, i));
    }
  }

  ngOnInit() {
  }

}
