import { RouterModule, Routes } from '@angular/router';
import { DirectComponent } from './direct/direct.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './projet/cv/cv.component';
import { ServersComponent } from './servers/servers.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'direct', component: DirectComponent },
  { path: 'servers', component: ServersComponent },
];

export const GL_N_ROUTING = RouterModule.forRoot(myRoutes);
