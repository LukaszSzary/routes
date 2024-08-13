import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NotesComponent } from "./components/notes/notes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotesComponent, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routes';
}
