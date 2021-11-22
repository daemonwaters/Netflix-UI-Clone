import React from 'react'

function Button({children,cls,onClick}) {
    return (
        <button className={cls} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
