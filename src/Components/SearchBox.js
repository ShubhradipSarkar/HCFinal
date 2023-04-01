import React, { useState } from 'react';
import data from './ListData.json';
import  Button  from 'react-bootstrap/Button';
import {Link,NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


/////////////////////////////////////////


/////////////////////////////////////////

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
    const results = data.filter((item) =>
      item.text.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      
      {searchResults.map((result) => (
        <div key={result.id} className='opbutt'>
            <Nav.Link href={result.msg}><Button variant="primary" className="w-100 m-1">{result.text}</Button></Nav.Link>
        </div>
      ))}
    </div>
  );
}

export default SearchBox;
