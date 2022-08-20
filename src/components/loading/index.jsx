import React from 'react'
import './loading.css'

const Loading = ({loading,children}) => {
    return (
        <div className="loading-contaienr">
            {
                loading ? 
                <div className="loading"></div> : children
            }        
        </div>
    )
}

export default Loading