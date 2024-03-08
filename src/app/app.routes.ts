import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CreatorListComponent } from './creator-list/creator-list.component';
import { StarListComponent } from './star-list/star-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { CreatorEditComponent } from './creator-edit/creator-edit.component';
import { StarEditComponent } from './star-edit/star-edit.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
export const routes: Routes = [
    { path: '', component: MovieComponent},
    { path: 'movie-detail', component: MovieDetailComponent},
    { path: 'movie-list', component: MovieListComponent},
    { path: 'creator-list', component: CreatorListComponent},
    { path: 'star-list', component: StarListComponent},
    { path: 'person-list', component: PersonListComponent},
    { path: 'movie-edit', component: MovieEditComponent},
    { path: 'creator-edit', component: CreatorEditComponent},
    { path: 'star-edit', component: StarEditComponent},
    { path: 'person-edit', component: PersonEditComponent},

    
];
