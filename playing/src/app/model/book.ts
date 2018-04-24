import { Category } from './category';

export class Book {

  title: string;
  author: string;
  pages: number;
  category: Category;

  constructor(title?: string, author?: string, pages?: number, category?: Category) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.category = category;
  }

}
