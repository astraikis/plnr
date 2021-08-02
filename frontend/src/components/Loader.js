import React from 'react'

function Loader() {
    return (
        <div className='popup-container'>
            <div className="lds-ellipsis loader"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader