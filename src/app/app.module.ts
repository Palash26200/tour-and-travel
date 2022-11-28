import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContainerComponent } from './components/container/container.component';
import { PackageComponent } from './components/package/package.component';
import { DestinationComponent } from './components/destination/destination.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ContainerComponent,
    PackageComponent,
    DestinationComponent,
    NewsLetterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
