import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, MatButtonModule, HttpClientModule ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {

  movies: any[] = [];
  movieName: string = '';
  response: string = '';
  movie_id: any = '';

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    const HOST: string = 'http://localhost:3000';
    const url = `${HOST}`;

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
  search(movieName: HTMLInputElement) {
    const HOST: string = 'http://localhost:3000/';
    const url = `${HOST}search`;
  
    const params = new HttpParams().set('movie_name', movieName.value);
  
    this.httpClient.post(url, {}, { params }).subscribe(
      (response: any) => {
        if (response && response.movie && Array.isArray(response.movie)) {
          this.movies = response.movie;
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
    const url = `${HOST}movie-details?movie_id=${movieId}`;
  
    this.httpClient.post(url, { movieId }).subscribe(
      (response: any) => {
        this.movie_id = movieId ;
        this.response = response;
        this.router.navigate(['/movie-detail'], { queryParams: { movie_id:  this.movie_id} });
        console.log('Movie details:', response);
      },
      (error: any) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
  
  
  

  
    creatorList() {
      this.router.navigate(['/creator-list']);
    }
    starList() {
      this.router.navigate(['/star-list']);
    }
    personList() {
      this.router.navigate(['/person-list']);
    }
    movieList() {
      this.router.navigate(['/movie-list']);
    }

    
  
}


