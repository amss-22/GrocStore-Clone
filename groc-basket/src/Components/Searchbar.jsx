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
     <Suggestion length={5} active={active}>
      {suggestion.map((item,index)=>{
        return (
<div key={index} onMouseOver={()=> setActive(index+1)}>
  {item}

</div>
        )
      })}
     </Suggestion>
    </Wrapper>
  )
}
export default Searchbar

const Suggestion = styled.div`
border: 1px solid red;
height: ${({length})=> `${length * 41}px` };
overflow: auto;
display: flex;
flex-direction: column;

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
border: 1px solid red;

display: flex;
align-items: center;
paddding : 10px 5px;
margin:auto;


`
const Input=styled.input`
border:none;
outline:none;
font-size: 20px;
flex: 1;

`
const Wrapper=styled.div`
// border: 1px solid green;
max-width:400px;
margin:auto;
`
