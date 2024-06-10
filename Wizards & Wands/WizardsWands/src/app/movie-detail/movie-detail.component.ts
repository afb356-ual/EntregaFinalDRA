import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MovieDetailComponent implements OnInit {
  movie: any = null;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id')!;
    console.log('Movie ID:', movieId);
    this.movieService.getMovieDetails(movieId).subscribe(data => {
      console.log('Movie details:', data);
      this.movie = data.data;
      this.isLoading = false;
    });
  }
}
