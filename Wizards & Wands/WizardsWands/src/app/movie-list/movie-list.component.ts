import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      console.log('Movies data:', data);
      this.movies = data.data;
    }, error => {
      console.error('Error fetching movies:', error);
    });
  }
}
