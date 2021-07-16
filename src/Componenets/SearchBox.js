import React from 'react'

const SearchBox = (props) => {
    return (
        <input 
            className='tc pa2 search-input'
            type='search'
            placeholder={props.placeholder}
        
            onChange={props.handleChange}
        />
    )
  
}
export default SearchBox;