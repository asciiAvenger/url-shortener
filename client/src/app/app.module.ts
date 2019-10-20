import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSliderModule, MatSelectModule, MatCardModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavComponent } from './components/nav/nav.component';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';

const appRoutes: Routes = [
  {
    path: 'shorten',
    component: UrlShortenerComponent
  },
  {
    path: '',
    redirectTo: '/shorten',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UrlShortenerComponent,
    PathNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
