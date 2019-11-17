import { Component } from '@angular/core';
import { SwService } from './sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private swService: SwService) {


  }


  /*   randomNum() {
      this.swService.getRandomNum(1, 100).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log('error')
      });
  
    } */

  //Con Asyc Await seria de esta manera.
  /* async randomNum() {
    let res = await this.swService.getRandomNum(1, 13);
    if (res.error) {
      alert(res.error);
    } else {
      console.log(res.success);
    }
  } */
}
