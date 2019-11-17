import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';
import { MoviesComponent } from './movies/movies.component';
import { CharactersComponent } from './characters/characters.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/planetas' },
  { path: 'planetas', component: ListaPlanetasComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'characters', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
