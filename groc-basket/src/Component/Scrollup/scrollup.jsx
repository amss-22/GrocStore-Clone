import "./Scroll.Module.css"
import React from "react"
import styled from "@emotion/styled"
import { BiUpArrowAlt } from 'react-icons/bi';
import { useEffect,useState } from "react";
const GoToTop = () => {
    const [isVisible ,setIsVisible] = useState(false)
    const goToBtn = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    const listenToScroll = () => {
        let heightTohidden = 250;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightTohidden) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",listenToScroll)
    })
    return (
        <wrapper>
            {isVisible && (
                <div className="top-btn" onClick={goToBtn}>
                
                <BiUpArrowAlt/>
            </div>
            )
                 
            }
       
            </wrapper>
    )
}

const wrapper = styled.section;


export default GoToTop;