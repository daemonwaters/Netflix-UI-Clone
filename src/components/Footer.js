import React from 'react'
import {HashLink} from 'react-router-hash-link'
import Button from './Button'
import {FaGlobe,FaAngleDown} from 'react-icons/fa'
import { BrowserRouter } from 'react-router-dom'

function Footer() {
    return (
        <BrowserRouter>
        <footer>
            <p>
                Questions ? Call 900 822 377
            </p>
            <div className="cols">
                <div className="col">
                    <HashLink>
                        FAQ
                    </HashLink>
                    <HashLink>
                            investor Relations
                        </HashLink>
                        <HashLink>
                                ways to watch
                        </HashLink>
                        <HashLink>
                            corporate information
                        </HashLink>
                        <HashLink>
                            only on netflix
                        </HashLink>
                </div>
                <div className="col">
                    <HashLink>
                        help center
                    </HashLink>
                    <HashLink>
                            jobs
                        </HashLink>
                        <HashLink>
                            terms of use
                        </HashLink>
                        <HashLink>
                                contact us
                        </HashLink>
                </div>
                <div className="col">
                    <HashLink>
                        Account
                    </HashLink>
                    <HashLink>
                            Redeem gift cards
                        </HashLink>
                        <HashLink>
                            privacy
                        </HashLink>
                        <HashLink>
                            speed test
                        </HashLink>
                </div>
                <div className="col">
                    <HashLink>
                        media center
                    </HashLink>
                    <HashLink>
                            buy gift cards
                        </HashLink>
                        <HashLink>
                            cookies preferences
                        </HashLink>
                        <HashLink>
                            legal notices
                        </HashLink>
                </div>
            </div>
            <Button>
            <FaGlobe/>
                English
            <FaAngleDown/>
            </Button>
            <p className="spn">
                Netflix spain
            </p>
        </footer>
        </BrowserRouter>
    )
}

export default Footer
