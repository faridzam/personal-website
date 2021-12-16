import React from 'react'
import {Link} from 'react-router-dom'


class CTA extends React.Component{
    render(){
        return(
            <Link>
                <button className="cta-button">
                    <h1 className="cta-text1">GET IN TOUCH</h1>
                </button>
            </Link>
        );
    }
}

export default CTA;