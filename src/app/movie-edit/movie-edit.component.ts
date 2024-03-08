import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-movie-edit',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, MatDatepickerModule
          , MatNativeDateModule],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.scss'
})
export class MovieEditComponent implements OnInit {
 selectedGenre: string = '';
  genres: string[] = ['Action', 'Adventure', 'Comedy', 'Horror', 'Romance', 'Science fiction', 'Animation'];
  movie_name: string = '';
  poster: string = '';
  plot: string = '';
  date: string = '';
selectedDate: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) {
    this.movie_name = '';
    this.poster = '';
    this.plot = '';
    this.selectedGenre = '';

  }
  

  ngOnInit() {
  }
  
  async saveMovie() {
    const url = 'http://localhost:3000/sertMovie';
    const body = {
      movie_name: this.movie_name,
      poster: this.poster,
      plot: this.plot,
      genre: this.selectedGenre,
    };
  
    console.log('Data to send:', body);
  
    this.httpClient.post(url, body).subscribe(
      (response: any) => {
        console.log('Movie successfully saved:', response);
      },
      (error: any) => {
        console.error('Error saving movie:', error);
      }
    );
  }
  
  

  backhome() {
    this.router.navigate(['/movie-list']);
  }
}