import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { Category } from '../model/category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  show: string = 'table';
  newBook: Book = new Book("", "", 0, new Category(0, "", ""));
  books: Book[] = [];
  categories: Category[] = [];

  constructor() {

    for (let i = 0; i < 10; i++) {
      let index = i + 1;
      this.categories.push(new Category(index, "Category " + index, "Desc category " + index));
    }

    for (let i = 0; i < 5; i++) {
      let index = i + 1;
      let category = new Category(index, "Category " + index, "Desc category " + index);

      let book = new Book("Title " + index, "Author " + index, Math.floor((Math.random() * index * 100)));
      book.category = this.categories[Math.floor(Math.random() * this.categories.length)];
      this.books.push(book);
    }
  }

  ngOnInit() {
  }

  add() {
    this.books.push(this.newBook);
    this.newBook = new Book();
    this.show = 'table';
  }

  edit(book) {
    this.newBook = this.books.filter(b =>
      b.author == book.author
      && b.title == book.title)[0];
  }


  remove(index) {
    this.books.splice(index, 1);
  }


  showDiv(str: string) {
    this.show = str;
  }


}
