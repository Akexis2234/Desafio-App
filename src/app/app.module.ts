import{ NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { RouterLink, RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CardComponent } from './components/shared/card/card.component';
import { TabComponent } from './components/shared/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    PaginationModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';

/** Default values provider for rating */
@Injectable({
  providedIn: 'root'
})
export class RatingConfig {
  /** aria label for rating */
  ariaLabel = 'rating';
}
