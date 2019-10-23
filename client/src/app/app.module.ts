import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSliderModule, MatSelectModule, MatCardModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavComponent } from './components/nav/nav.component';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { SuccessComponent } from './components/success/success.component';
import { RedirectComponent } from './components/redirect/redirect.component';

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
    path: 'success',
    component: SuccessComponent
  },
  {
    path: ':id',
    component: RedirectComponent
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
    PathNotFoundComponent,
    SuccessComponent,
    RedirectComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
