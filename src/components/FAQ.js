import React from 'react'

function FAQ({children}) {
    return (
        <div className="faq">
            <h1>
            Frequently Asked Questions
            </h1>
            <div className="questions">
                {children}
            </div>
        </div>
    )
}

export default FAQ
