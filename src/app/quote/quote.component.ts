import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Life', 'Life is Good', 'Nelly', 'Nelly', new Date(2020, 8, 25)),
    new Quote(2, 'Life', 'Life is Good', 'Nelly', 'Ayebale Nelly', new Date(2020, 8, 25))
  ]
  showQuote(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`${this.quotes[index].name} Are you sure you want to delete your ${this.quotes[index].type} quote ?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  addUpvote(index) {
    this.quotes[index].Upvote++;
  }
  addDownvote(index) {
    this.quotes[index].Downvote++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
