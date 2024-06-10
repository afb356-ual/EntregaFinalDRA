import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { SpellsComponent } from './spells/spells.component';
import { BookListComponent } from './book-list/book-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'characters', component: CharactersListComponent },
    { path: 'spells', component: SpellsComponent },
    { path: 'books', component: BookListComponent },
    { path: 'books/:id', component: BookDetailComponent },
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/:id', component: MovieDetailComponent },
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '/home' }
];
