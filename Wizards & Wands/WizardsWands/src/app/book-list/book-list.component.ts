import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  selectedBook: any = null;
  chapters: any[] = [];
  isLoadingChapters: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      console.log('Books data:', data);
      this.books = data.data;
    }, error => {
      console.error('Error fetching books:', error);
    });
  }

}
