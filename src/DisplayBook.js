import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookStatusPicker from './BookStatusPicker'

class DisplayBook extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {

    const { book,currentShelf,onChangeShelf } = this.props

    return (


          <div>
          {book.map((book)=>(
            
            <div key={book.id}>
            <div className="book" >
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: book.imageLinks
                        ? `url(${book.imageLinks.thumbnail})`
                        : "",
                    }}
                  ></div>
                  <div className='book-shelf-changer'>
                        <BookStatusPicker 
                          book={book}
                          onChangeShelf={onChangeShelf}
                          />

                      </div>
                  </div>
                  </div>

                      
                  
                  <div className="book-title">
                    {book.title ? book.title : "no title provided"}
                  </div>
                  <div className="book-authors">
                    {book.authors ? book.authors.join(",") : "no author provided"}
                  </div>
                  </div>
          ))}
        </div>
       
    )
  }
}

export default DisplayBook
