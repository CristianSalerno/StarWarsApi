import { Component, OnInit } from '@angular/core';
import { SwService } from '../sw.service';

@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.component.html',
  styleUrls: ['./lista-planetas.component.css']
})
export class ListaPlanetasComponent implements OnInit {
  arrPlanetas: any[];
  numPaginas: number;
  paginaActual: number;

  constructor(private swService: SwService) {
    this.paginaActual = 1;

  }

  ngOnInit() {
    this.recuperarPlanetas();
  }

  cambiarPagina(cambio) {
    if (cambio < 0) {
      this.paginaActual--;
    } else {
      this.paginaActual++;
    }
    this.recuperarPlanetas();
  }

  recuperarPlanetas() {
    this.swService.getPlanets(this.paginaActual)
      .then((res) => {
        this.arrPlanetas = res['results'];
        this.numPaginas = Math.ceil(res['count'] / 10)
        console.log(this.arrPlanetas)
        //console.log(this.numPaginas);
      })
      .catch((err) => {

      });
  }

}
