import React from 'react'

const Error = ({error}) => {
  return (
    <>
        {
            error ? 
            <p>{error}</p> : null
        }    
    </>
  )
}

export default Error