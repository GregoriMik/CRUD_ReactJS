import React, { Component } from 'react';
import { books } from '../data.js';
import Book from '../components/Book';
class Books extends Component 
{
    // constructor () {
    //     doSomething();
    // }

    render(){
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(book=>{
                                return(
                                    <Book key={book.id} book={book}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Books;