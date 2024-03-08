import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule ],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieDetails: any;
  movie_id: any;

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.movie_id = params['movie_id'];
      this.fetchMovieDetails();
    });
  }

  fetchMovieDetails() {
    const HOST: string = 'http://localhost:3000/';
    const url = `${HOST}movie-details?movie_id=${this.movie_id}`;

    try {
      this.httpClient.post(url, { movie_id: this.movie_id }).subscribe(
        (response: any) => {
          this.movieDetails = response;
          console.log('Movie details:', response);
        },
        (error: any) => {
          console.error('Error fetching data:', error);
        }
      );
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  backhome() {
    this.router.navigate(['/']);
    }
}
