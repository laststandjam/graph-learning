import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {getBooksQuery} from "../queries/queries"

const BookList = () => {
  
  const query = useQuery(getBooksQuery);
  
  const displayBooks = () => {
    if (query.loading) {
      return <div>loading books...</div>;
    } else {
      console.log(query.data.books[0])
      return query.data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };
  return (
    <div className="App">
      <ul id="book-list"> </ul>
      <>{displayBooks()}</>
    </div>
  );
};

export default BookList;
