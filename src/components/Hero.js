import React from 'react'
import Button from './Button'
import {FaAngleRight} from 'react-icons/fa'

function Hero({children}) {
    return (
        <div className="hero-section">
            {children}
            <div className="hero-content">
                <h1>
                Unlimited movies, TV <br/>
                   shows, and more.
                </h1>
                <p>
                Watch anywhere. Cancel anytime.
                </p>
                <p>
                Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="email-section">
                    <input type="text" name="email" placeholder="Email adress"/>
                    <Button>
                        Get started
                        <FaAngleRight/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
