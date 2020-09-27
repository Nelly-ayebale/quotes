import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Life', 'The Purpose of our lives is to be happy', 'Dalai Lama', 'Nelly', new Date(1975, 8, 25)),
    new Quote(2, 'Love', 'We accept the love we think we deserve', 'Stephen Chbosky', 'Ayebale Nelly', new Date(2000, 6, 25)),
    new Quote(3, 'Money', 'Money often costs too much', 'Ralph Waldo Emerson', 'Ayebale Abigail', new Date(2001, 5, 25)),
    new Quote(4, 'Family', 'A happy family is but an earlier heaven', 'George Bernard Shaw', 'Nelly A', new Date(2000, 8, 25)),
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
