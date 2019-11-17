import { Component, OnInit } from '@angular/core';
import { SwService } from '../sw.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  actualPage: number;
  arrCharacters: any[];
  numPaginas: number;

  constructor(private swService: SwService) {
    this.actualPage = 1
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.swService.getPeople(this.actualPage).then((res) => {
      this.arrCharacters = res['results'];
      this.numPaginas = Math.ceil(res['count'] / 10);
      console.log(this.arrCharacters)
    }).catch((err) => {
      console.log('characters not available')
    })
  }

  cambiarPagina(cambio) {
    if (cambio < 0) {
      this.actualPage--;
    } else {
      this.actualPage++;
    }
    this.getCharacters();
  }

}
