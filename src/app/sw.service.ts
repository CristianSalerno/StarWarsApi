import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SwService {

  constructor(private http: HttpClient) {

  }

  getPlanets(pPagina) {
    //Devuelve un observable. Lo transformo a Promesa
    return this.http.get('https://swapi.co/api/planets/?format=json&page='
      + pPagina).toPromise()
  }

  getPeople(pPagina) {
    return this.http.get('https://swapi.co/api/people/?format=json&page=' + pPagina).toPromise();
  }

  getMovies(pPagina) {
    return this.http.get('https://swapi.co/api/films/?format=json&page=' + pPagina).toPromise();
  }






  //Api Random Number
  getRandomNum(pMin, pMax) {
    const httpOptions = {
      headers: new HttpHeaders({
        NeolandUserId: 'CS07077A07A0',

      })
    }

    const body = {
      max: pMax,
      min: pMin
    }

    return this.http.post('http://neorandom.ngrok.io/random/num', body, httpOptions).toPromise();
  }

}
