import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BookStatusPicker extends React.Component {
 
 
    state = {
    value: this.props.shelf
  };


    handleChange = event => {
        this.setState({ value: event.target.value });  
          this.props.onChangeShelf(this.props.book, event.target.value)
        event.preventDefault();
      };

  render() {
    
    const {book} = this.props

    
    return (
      <select 
        value={book.shelf}
        onChange={this.handleChange}
      >
          
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to read</option>
          <option value="read">Read</option>

      </select>
    )
  }
}

export default BookStatusPicker
