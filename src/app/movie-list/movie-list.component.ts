import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, HttpClientModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) {}

  movies: any[] = [];

  movieName: string = '';
  response: string = '';
  movie_id: any = '';

  ngOnInit() {
    const HOST: string = 'http://localhost:3000';
    const url = `${HOST}/movie-list`;

    this.httpClient.post(url, {}).subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.movies = response;
          console.log(this.movies);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  movie_detail(movieId: number) {
    const HOST: string = 'http://localhost:3000/';
    const url = `${HOST}movie-edit?movie_id=${movieId}`;
  
    this.httpClient.post(url, { movieId }).subscribe(
      (response: any) => {
        this.movie_id = movieId ;
        this.response = response;
        this.router.navigate(['/movie-edit'], { queryParams: { movie_id:  this.movie_id} });
        console.log('Movie details:', response);
      },
      (error: any) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }


  movieSert() {
    this.router.navigate(['/movie-edit']);
    }
    backHome() {
      this.router.navigate(['/']);
    }

    
}
