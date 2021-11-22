import React from 'react'

function Row({children,direction}) {
    return (
        <div className={direction ? direction : 'row'}>
            {children}
        </div>
    )
}

export default Row
