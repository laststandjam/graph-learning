import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import {getAuthorsQuery} from "../queries/queries"

const AddBook = () => {
  const query = useQuery(getAuthorsQuery);

 
  const displayAuthors = () => {
    if (query.loading) {
      return <option>loading books...</option>;
    } else {
      console.log(query.data.authors[0]);
      return query.data.authors.map(authors => {
        return <option key={authors.id} value={authors.id}>{authors.name} </option>;
      });
    }
  };
  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>

      <div className="field">
          <label>Genre:</label>
          <input type="text"/>
      </div>

        <div className="field">
            <label>Author:</label>
            <select>
                <option>Select Author</option>
                {displayAuthors()}
            </select>
        </div>

        <button>+</button>
    </form>
  );
};

export default AddBook;
