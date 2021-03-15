import { nominalTypeHack } from 'prop-types';
import React from 'react';

class Book extends React.Component {
    state = { //do i need any of these???
        shelfChanged: false,
        currentShelf: this.props.book.shelf,
        newShelf: ''
    }

    handleShelfChange = (event) => {
        this.setState({shelfChanged: true, newShelf: event.target.value});
        console.log(event.target.value);
        console.log(this.props.book);
        //this.props.updateShelf(this.props.book, event.target.value);
    }

    render() {
        const shelfOptions = [
            {
                shelf: 'currentlyReading', 
                txt: 'Currently Reading'
            }, 
            {
                shelf: 'wantToRead',
                txt: 'Want to Read'
             },
            {
                shelf: 'read',
                txt: 'Read'
            },
            {
                shelf: 'none',
                txt: 'None'
            }
        ];

        const { book, updateShelf } = this.props;

        return (
            <div id={book.id} className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url("${book.imageLinks.smallThumbnail}")` 
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleShelfChange}>
                            <option value="move" disabled>Move to...</option>

                            {shelfOptions.map((shelfOption) => {
                                if (shelfOption.shelf !== book.shelf){
                                    return <option key={`${book.id}${shelfOption.shelf}`} value={shelfOption.shelf}>{shelfOption.txt}</option>
                                }
                            })}

                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors.map((author, index) => 
                        {if (index < 1) {
                            return author;
                        } else {
                            return `, ${author}`;
                        }}
                    )}
                </div>
            </div>
        )
    }
}

export default Book;