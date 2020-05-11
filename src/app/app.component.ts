import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page-service';
import { ProductoService } from './services/producto-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'portafolio';
  constructor(public InfoPageService: InfoPageService,
                      porductosService : ProductoService){

  }
}
