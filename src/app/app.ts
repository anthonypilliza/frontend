import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InformacionComponent } from './Components/informacion/informacion'; // importa el componente


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InformacionComponent], // agrégalo aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
