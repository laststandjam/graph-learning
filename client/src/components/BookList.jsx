import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
const BookList = () => {
  
  const data = useQuery(getBooksQuery);
  
  const displayBooks = () => {
    if (data.loading) {
      return <div>loading books...</div>;
    } else {
      console.log(data.data.books[0])
      return data.data.books.map(book => {
        return <li>{book.name}</li>;
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
