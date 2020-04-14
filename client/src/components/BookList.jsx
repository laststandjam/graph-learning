import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo"

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  
  return (
   
    <div className="App"> 
    {console.log(getBooksQuery)}
      <ul id="book-list"> </ul>
      <li>Book name</li>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
