import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeBanerComponent } from './home-baner/home-baner.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FeedComponent } from './feed/feed.component';
import { FeedItemComponent } from './feed-item/feed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeBanerComponent,
    MainPageComponent,
    FeedComponent,
    FeedItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
