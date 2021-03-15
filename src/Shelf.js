import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
    render() {

        const { shelfName, books, updateShelf } = this.props;
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book) => 
                      <li key={book.id}>
                          <Book book={book} onClick={this.updateShelf} />
                      </li>
                    )}
                  </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;