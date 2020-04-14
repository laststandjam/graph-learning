import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo"
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
  const data= useQuery(getBooksQuery)
  return (
   
    <div className="App"> 
    {console.log(data)}
      <ul id="book-list"> </ul>
      <li>Book name</li>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
