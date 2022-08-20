import React from 'react'
import './scroll_on_top.css';

const ScrollOnTop = () => {
  
  return (
    <div className="scroll-on-top bg-warning" onClick={() =>   window.scrollTo(0, 0)}>
     Scroll To Top
    </div>
  )
}

export default ScrollOnTop