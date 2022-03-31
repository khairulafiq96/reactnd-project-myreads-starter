import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import DisplayBookStatus from './DisplayBookStatus'
import BookSearch from './BookSearch'
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.changeShelf = this.changeShelf.bind(this);
  }
  
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : []
  }

  

 

  componentDidMount() {
      BooksAPI.getAll()
      .then((books) => {
          this.setState(() => ({
              books
          }))
      })
  }

  changeShelf =  (book, shelf) => {    
    BooksAPI.update(book, shelf)   
    .then(() => { BooksAPI.getAll()
    .then((res) => {
     this.setState({
       books: res,
       searchBooks: res,

     });
     
   })});  
 };
 

  render() {
    
    return (
      <div className="app">
          <div className="list-books-title">
              <h1>MyReads</h1>
             
            </div>
            
            <Route
              exact path="/"
              render={()=>(
                <DisplayBookStatus 
                  book={this.state.books}
                  onChangeShelf={this.changeShelf}
                  onNavigate={()=>
                    this.setState(()=>({screen : "search"}))}/>
              )}>

            </Route>


            

            <Route
              path="/search"
              render={()=> (
                <BookSearch 
                  books={this.state.books}
                  onChangeShelf={this.changeShelf}
                  shelves={this.shelf}
                  />
              )}>

            </Route>

            <div className="open-search">
            <Link to="/search" className="open-search">
              <button></button>
            </Link>
          </div>
        
            

        </div>

        
    )
  }
}

export default BooksApp
