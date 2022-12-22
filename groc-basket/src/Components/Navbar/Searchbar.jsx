import React, { useEffect, useState } from 'react';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { add_product_to_cart } from '../../redux/CartReducer/action';
import { Link } from 'react-router-dom';
import { setSingleData } from '../../redux/singleProductReducer/action';
import { useToast } from '@chakra-ui/react';




const Searchbar = ({queryhandle,suggestion}) => {

  const toast=useToast()
  const [inputtext , setInputText]=useState("")
  const [active , setActive]=useState(0)
  const dispatch=useDispatch()

  const handleChange=(e)=>{
    setInputText(e.target.value)

  }
  
const handleActiveSuggestion=(e)=>{
  
switch(e.keyCode){
  case 38:
   return setActive(prev => prev-1);
   case 40:
    return setActive(prev=> prev+1);
    default:
      return;
}


}


  useEffect(()=>{
    queryhandle(inputtext)

  },[queryhandle,inputtext])
  

  return (
    <Wrapper onKeyUp={handleActiveSuggestion}>
     <SearchWrapper>
     <Input value={inputtext} onChange={handleChange} />
     </SearchWrapper>
     
    { (suggestion.length>0) ? 
    <Suggestion length={5} active={active} array={suggestion}>
    {suggestion.map((item,index)=>{
      return (
<div key={index} onMouseOver={()=> setActive(index+1)} style={{display:"flex", alignItems: "center"}}>
<img src={item.img_src} style={{height: "40px"}} />
<Link to={`/${item.catergory}/${item.id}`} onClick={()=> dispatch(setSingleData({...item}))}>{item.product_info}</Link>
<div style={{display:"flex", alignItems: "center"}}  onClick={()=> {
  dispatch(add_product_to_cart({...item})) ;
  toast({
    title: "Added to cart SuccessFully",
    description: `${item.product_info}`,
    position: "top-center",
    status: "success",
    duration: 2000, 
    isClosable: true,
  });
} } ><BsFillBagPlusFill size="35px"/>Add</div>
<div style={{display:"flex", alignItems: "center" , flexDirection:"end" }} ><FaRupeeSign size="35px"/>{item.price}</div>


</div>
      )
    })}
   </Suggestion>:null
   
  }
     
    
    </Wrapper>
  )
}
export default Searchbar

const Suggestion = styled.div`
border: 1px solid grey;
border-top: 0px;
height: ${({length,array})=> (array.length>0) ? `${length * 60}px` : `${0}px` };
overflow: auto;
display: flex;
flex-direction: column;
position: absolute;
z-index:1000;
background-color: white;
width: 690px;
@media (max-width: 1500px) {
  flex-direction: column;
  width: 50px;
  
}
@media (max-width: 800px) {
  flex-direction: column;
  
}







& *{
  // border: 1px solid blue;
  padding-right: 10px;
  padding: 10px
}

& :nth-child(${({active})=> active}){
background: rgba(0,0,0,0.08);
cursor: pointer;
}
`

const SearchWrapper=styled.div`
border: 1px solid grey;
display: flex;
align-items: center;
paddding : 10px 5px;
margin:auto;
width: 500px;
@media (max-width: 1500px) {
  
  width: 10px;
  margin-left:70%
  
}
@media (max-width: 900px) {
  flex-direction: column;
  margin-left:20%
  
  
}



`
const Input=styled.input`
border:none;
outline:none;
font-size: 20px;
flex: 1;

`
const Wrapper=styled.div`
// border: 5px solid purple;
width: 700px;
margin:auto;
`
