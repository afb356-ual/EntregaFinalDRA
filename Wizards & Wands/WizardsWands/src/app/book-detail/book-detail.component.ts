import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BookDetailComponent implements OnInit {
  book: any = null;
  chapters: any[] = [];
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id')!;
    console.log('Book ID:', bookId);
    this.bookService.getBookDetails(bookId).subscribe(data => {
      console.log('Book details:', data);
      this.book = data.data;
      this.loadChapters(bookId);
    });
  }

  loadChapters(bookId: string): void {
    this.bookService.getChapters(bookId).subscribe(data => {
      console.log('Chapters data:', data);
      this.chapters = data.data;
      this.isLoading = false;
    });
  }
}
