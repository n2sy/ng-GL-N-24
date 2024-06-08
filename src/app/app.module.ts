import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './projet/cv/cv.component';
import { ListeComponent } from './projet/liste/liste.component';
import { DetailsComponent } from './projet/details/details.component';
import { ItemComponent } from './projet/item/item.component';
import { DirectComponent } from './direct/direct.component';
import { ServersComponent } from './servers/servers.component';
import { CustomDirDirective } from './custom-dir.directive';

@NgModule({
  declarations: [AppComponent, FirstComponent, ChildComponent, CvComponent, ListeComponent, DetailsComponent, ItemComponent, DirectComponent, ServersComponent, CustomDirDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
