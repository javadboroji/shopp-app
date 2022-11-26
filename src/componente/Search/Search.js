import React,{useContext} from 'react'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { newContext } from '../Context.js/Context';
import './index.css'
const ariaLabel = { 'aria-label': 'description' };
function Search() {
    const {setSearchToggel,searchToggel} = useContext(newContext)
    const searchToggleHandler=()=>{
        setSearchToggel(!searchToggel)
    }
    return (
        <div className='mx-3'>
           
               <IconButton className='btn--search' onClick={searchToggleHandler}>
                    <SearchIcon />
               </IconButton>
                

        </div>
    )
}

export default Search