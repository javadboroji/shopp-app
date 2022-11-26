import React, { useContext,useState } from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { newContext } from '../Context.js/Context';
function SearchInput() {
    const { searchToggel,products,setProducts } = useContext(newContext)
    const [searchValue, setSearchValue] = useState('')
    const searchHandler =(e)=>{
        setSearchValue(e.target.value)
    }
    const filterHandler=()=>{
        const fiterItem= products&&products.filter(item=>item.title.includes(searchValue))
        setSearchValue("")
        setProducts(fiterItem)
    }
    return (
        <>
            {searchToggel && <div className='inp--box'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                    className='Box-inp-search'
                >
                    <Input label="Filled success" variant="filled" color="success" className='w-75' value={searchValue} onChange={(e)=>searchHandler(e)}/>
                    <IconButton className='btn--search--icon--input' onClick={filterHandler}>
                    <SearchIcon />
                </IconButton>
                </Box>
                

            </div>}</>
    )
}

export default SearchInput