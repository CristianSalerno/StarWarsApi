import { Component, OnInit } from '@angular/core';
import { SwService } from '../sw.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  pageNumber: number;
  arrMovies: any[];

  constructor(private swService: SwService) {
    this.pageNumber = 1;


  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.swService.getMovies(this.pageNumber).then((res) => {
      this.arrMovies = res['results']

      console.log(this.arrMovies);
    }).catch((err) => {
      console.log('movies not available.')
    });
  }
}
