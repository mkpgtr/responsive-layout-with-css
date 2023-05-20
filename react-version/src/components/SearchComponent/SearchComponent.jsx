import React, { useState } from 'react';
import { thingsLearnt } from '../../pages/ThingsLearnt/data';
import { useAppContext } from '../../contexts/AppContext';

const SearchComponent = ({ data }) => {
  const {searchTerm,setSearchTerm,searchResults,setSearchResults} = useAppContext()

  

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const results = data.filter((item) =>
      item.text.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
     
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
     
      
   
    </div>
  );
};

export default SearchComponent;
