import React, {useState} from "react";
import { useQuery } from "@apollo/react-hooks";
import {getAuthorsQuery} from "../queries/queries"

const AddBook = () => {
  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")
  const [authorId, setAuthorId] = useState("")
 
  const query = useQuery(getAuthorsQuery);

  const onChange = set=>e=>{
    const {target} = e;
    const { value } = target
    set(value)

  }
 
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
        <input type="text"  name="name" onChange={onChange(setName)}/>
      </div>

      <div className="field">
          <label>Genre:</label>
          <input type="text" name="genre" onChange={onChange(setGenre)}/>
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
