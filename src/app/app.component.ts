import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  caracteristicaMostrada = 1;
  onNavigate(caracteristica: number) {
    this.caracteristicaMostrada = caracteristica;
  }
}
