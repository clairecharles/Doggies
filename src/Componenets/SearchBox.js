import React from 'react'

const SearchBox = (props) => {
    return (
        <input 
            className='tc pa2'
            type='search'
            placeholder={props.placeholder}
        
            onChange={props.handleChange}
        />
    )
  
}
export default SearchBox;