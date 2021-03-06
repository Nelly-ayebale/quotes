import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';





@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesDetailComponent,
    DateCountPipe,
    QuotesFormComponent,
    NavbarComponent,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
