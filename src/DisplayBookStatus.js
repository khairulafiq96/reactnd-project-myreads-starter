import { element } from 'prop-types'
import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import DisplayBook from './DisplayBook'

class DisplayBookStatus extends React.Component {
  state = {
    
  }

  render() {
    const { book, shelf, onChangeShelf } = this.props

    const shelves = [
      { shelfName: "Currently Reading", id: "currentlyReading" },
        { shelfName: "Want to Read", id: "wantToRead" },
        { shelfName: "Read", id: "read" }
    ]


/*
<div>
              {shelves.map((shelf)=>(
                <DisplayBookStatus
                  book={this.state.books}
                />
              ))}
            </div>

            <div>
                  <h2 className="bookshelf-title">{item.shelfName}</h2>
                  <DisplayBook 
                    book={book}
                    currentShelf={book.shelf}/>
                </div>  


*/

    return (
      <div>
            <div className="bookshelf">
              

              {shelves.map((item)=> {
                 const booksOnShelf = this.props.book.filter(books=>books.shelf === item.id);
               return (
                    <div key={item.id}>
                    <h2 className="bookshelf-title">{item.shelfName}</h2>
                    <div >
                    <DisplayBook 
                      book={booksOnShelf}
                      currentShelf={item.shelf}
                      onChangeShelf={onChangeShelf}/>
                    </div>
              </div>  
               )})}
             

              </div>
            </div>
    )
  }
}

export default DisplayBookStatus
