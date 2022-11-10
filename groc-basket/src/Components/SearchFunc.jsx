import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Searchbar from './Searchbar'
import { getProductsData } from '../redux/NavigationReducer/action'

const SearchFunc = () => {
    const [query , setQuery]=useState("")
    const dispatch=useDispatch()
    const [suggestion ,setSuggestion]=useState([])
    const products=useSelector((state)=> state.NavigationReducer.products)

    const queryhandle=(data)=>{
setQuery(data)
    }
    
    useEffect(()=>{
        dispatch(getProductsData())
    },[])
    
        useEffect(()=>{
              // dispatch(getProductsData()) 
      //* filteration functionality will be done here 
      
      if(query === ""){
            setSuggestion([])
        }else{
              let newSuggestion=products.filter((item)=>{
                    return (item.product_info.toLowerCase().indexOf(query.toLowerCase())) !== -1  ? true : false 
            
                }).map((e)=> e.product_info)
                setSuggestion(newSuggestion)
            
            }
                },[query])
            
   
  return (
    <div>
        <h1>Searchbar : {query}</h1>
        <Searchbar queryhandle={queryhandle} suggestion={suggestion}/>

    </div>
  )
}

export default SearchFunc


 