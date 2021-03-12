import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
    render() {

        const { h2, books } = this.props;
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{h2}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book) => 
                      <li>
                          <Book book={book}/>
                      </li>
                    )}
                  </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;