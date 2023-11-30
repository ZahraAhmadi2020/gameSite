import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const SearchBox = () => {
  return (
    <div className='searchBox position-relative w-75 ms-1'>
      <AiOutlineSearch className='search-icon'/>
          <input className='inputsearch w-100 p-1'/>
    </div>
  )
}

export default SearchBox
