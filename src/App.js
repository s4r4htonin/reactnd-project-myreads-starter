import React from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import './App.css'
class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  async componentDidMount() {
    let currentBooks = await BooksAPI.getAll();

    this.setState({
      currentlyReading: currentBooks.filter((book) => book.shelf === 'currentlyReading'),
      wantToRead: currentBooks.filter((book) => book.shelf === 'wantToRead'),
      read: currentBooks.filter((book) => book.shelf === 'read')
    })

  }

  //method to update shelf

  //method to add to shelf

  render() {

    const { currentlyReading, wantToRead, read } = this.state;

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf h2='Currently Reading' books={currentlyReading} />
              <Shelf h2='Want to Read' books={wantToRead} />
              <Shelf h2='Read' books={read} />
            </div>
          </div>
          <div className="open-search">
            <button>Add a book</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
