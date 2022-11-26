import React,{useEffect,useContext} from 'react';
import './App.css';
import {newContext}from "./componente/Context.js/Context"
import axios from 'axios';
import { Routes, Route,Navigate} from "react-router-dom"
import Products from './componente/Products/Products';
import Footer from './componente/Footer/Footer';
import SinglePost from './componente/Products/SinglePost';
import  Nav  from './componente/Navbar/Nav';
import Pagenation from './componente/AdminPanle/Pagenation';
import ShoppCart from './componente/shoppCart/ShoppCart';
import SearchInput from './componente/Search/SearchInput';
function App() {
  const{setProducts, setError}=useContext(newContext)

  const getAllProducts =() =>{
    return( axios.get('https://fakestoreapi.com/products')
     .then( res=> setProducts(res.data))
     .catch(err=>setError(err))
    )
 }
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <>
    <Nav />
    <SearchInput />
      <Routes>
        <Route path='*' element={<Navigate to='/' replace/>}/>
        <Route path='/' element={<Products />}/>
        <Route path='/product/:id' element={<SinglePost />}/>
        <Route path='/admin' element={<Pagenation  />}/>
        <Route path='/shoppcart' element={<ShoppCart  />}/>
      </Routes>
      <Footer />
     </>
  );
}

export default App;
