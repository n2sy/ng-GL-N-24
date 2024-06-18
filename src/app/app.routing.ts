import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DirectComponent } from './direct/direct.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CvComponent } from './projet/cv/cv.component';
import { ServersComponent } from './servers/servers.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/add', component: AddComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'cv/:id/edit', component: EditComponent },
  { path: 'direct', component: DirectComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const GL_N_ROUTING = RouterModule.forRoot(myRoutes);
