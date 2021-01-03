import React from 'react'

function Scroll(props) {
  return (
    <div style={{overflow: 'scroll', borderTop: '1px solid black', height: '100vh'}}>
      {props.children}
    </div>
  )
}

export default Scroll
