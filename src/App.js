import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
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
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {currentlyReading.map((book) => 
                      <li>
                          <Book book={book}/>
                      </li>
                    )}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {wantToRead.map((book) => 
                      <li>
                          <Book book={book}/>
                      </li>
                    )}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {read.map((book) => 
                      <li>
                          <Book book={book}/>
                      </li>
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
          </div> */}
        </div>
      </div>
    )
  }
}

export default BooksApp
