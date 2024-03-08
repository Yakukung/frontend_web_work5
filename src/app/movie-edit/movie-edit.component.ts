import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-movie-edit',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.scss'
})
export class MovieEditComponent {
saveEdit() {
throw new Error('Method not implemented.');
}
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
    this.router.navigate(['/movie-list']);
    }
  
}
