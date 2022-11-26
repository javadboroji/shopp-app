import React, { useEffect, useState,useContext } from "react";
import ReactPaginate from "react-paginate";
import Admin from "./Admin";
import axios from "axios";
import {newContext}from "../Context.js/Context"
import './index.css'

export default function Pagenation() {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const{products}=useContext(newContext)

  /*const [products, setProducts] = useState([])
  const getAllProducts = () => {
    return (axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
    )
  }
  useEffect(() => {
    getAllProducts()
  }, [products])*/

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
   
    setItemOffset(newOffset);
  };

  return (
    <div className="pagantion-contaiiner">
      <Admin currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      
    </div>
  );
}