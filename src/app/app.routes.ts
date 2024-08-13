import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [

    {
        path: "notes", title: "Notes", component: NotesComponent
    },
    // {
    //     path: "", redirectTo: "/notes", pathMatch: 'full' 
    // }
    {
        path: "**",
        title: "404 not found",
        component: NotFoundComponent,
    },
    {
        path: "**",
        title: "404 not found",
        component: NotFoundComponent,
    }
];
