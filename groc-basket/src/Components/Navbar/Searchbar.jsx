import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const Searchbar = ({queryhandle,suggestion}) => {
  const [inputtext , setInputText]=useState("")
  const [active , setActive]=useState(0)

  const handleChange=(e)=>{
    setInputText(e.target.value)

  }
  
const handleActiveSuggestion=(e)=>{
  console.log(e.keyCode)
  //38 for up
  // 40 for down
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
  console.log(active)

  return (
    <Wrapper onKeyUp={handleActiveSuggestion}>
     <SearchWrapper>
     <Input value={inputtext} onChange={handleChange} />
     </SearchWrapper>
     {
     (suggestion.length>0)? 
     <Suggestion length={5} active={active} array={suggestion}>
      {suggestion.map((item,index)=>{
        return (
<div key={index} onMouseOver={()=> setActive(index+1)}>
  {item}

</div>
        )
      })}
     </Suggestion> : null
     }
    </Wrapper>
  )
}
export default Searchbar

const Suggestion = styled.div`
border: 1px solid grey;
border-top: 0px;
height: ${({length,array})=> (array.length>0) ? `${length * 41}px` : `${0}px` };
overflow: auto;
display: flex;
flex-direction: column;
position: absolute;
z-index:1000;
background-color: white;
width: 690px;






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
width: 500px



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
