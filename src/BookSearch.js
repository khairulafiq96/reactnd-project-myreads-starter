import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import DisplayBook from './DisplayBook';
import DisplayBookStatus from './DisplayBookStatus'

class BookSearch extends React.Component {

    state = {
        query : "",
        searchBooks:[]
    }

    updateQuery = async (query) => {
        this.setState(()=>({
            query : query
        }))

        if( query.trim() === '' || query.trim() === undefined){
            //console.log(typeof(query.trim()))
            this.setState(() => ({ searchBooks: [], }));
        }

        else if(query !== ""){
            
            try {
                const searchBooks = await BooksAPI.search(query);
                //console.log(searchBooks)
                

                if(searchBooks.error || searchBooks === undefined){
                    this.setState(() => ({searchBooks: []})); 
                } else if (searchBooks.length > 1 && searchBooks !== undefined){
                    this.setState(()=>({searchBooks : searchBooks}))
                }


                return searchBooks
            } catch (error){
                this.setState(() => ({searchBooks: []})); 
                console.log(error)
            }
        }

        
    }

    

render(){

    const {query,searchBooks}=this.state;
    const { onChangeShelf,books } = this.props
    const ownedBooks = books.filter((book) =>{
        
        return searchBooks.find(({id}) => book.id === id );       
    })

    /*const ownedBooks2 = searchBooks.map((item)=> {
        console.log(item.title)
        const shelf = {shelf: "none"}
        const shelfStatus = item.shelf === undefined
        console.log(shelfStatus)
        return {...item,...shelf}
    })*/

    const ownedBooks3 = searchBooks.map((item1)=> {
        const myBooks = books.find((item) => {if(item1.id === item.id){

        }})
        
        return myBooks
    })

    const ownedBooks4 = searchBooks.map((book) =>{
        const myBooks = books.find((item) => book.id === item.id )
        const shelf = myBooks ? myBooks.shelf : 'none';
        //console.log(book.title +  " : " + shelf)
        return {...book,shelf} ;       
    })




    //const shelf =  displayBooks ? displayBooks.shelf : 'none';

    return(
        <div className='search-books'>
            <div className='search-books-bar'>

                <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                
                <div className='search-books-input-wrapper'>
                    <input 
                        type='text'
                        placeholder='Search Books'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}>
                    </input>
                    
                </div>
            </div>
        
            <h2 className="bookshelf-title">Results</h2>

            <div className="search-books-results">
          
            <ol className="books-grid">
                <DisplayBook
                            book={ownedBooks4}
                            onChangeShelf={onChangeShelf}/> 
            </ol>

              {/*
              
                <DisplayBook
                            book={displayBooks}
                            onChangeShelf={onChangeShelf}/> 
              
              searchBooks.map((book) => {
                  const bookOnShelf = books.find(({id}) => book.id === id );
                  const shelf = bookOnShelf ? bookOnShelf.shelf : 'none';
                  
                  return (
                   <li key={book.id}>
                       {JSON.stringify(bookOnShelf)}
                        <DisplayBook
                            book={bookOnShelf}
                            onChangeShelf={onChangeShelf}/>
                </li> 
                )}) */}
            
                  
            </div>
           
        </div>
    )
}


}

export default BookSearch

/* 

*/