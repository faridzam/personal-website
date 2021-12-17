import React from 'react'
import {Link} from 'react-router-dom'


class CTA extends React.Component{
    render(){
        return(
                <Link to="/get-in-touch" className="cta-button" style={{ textDecoration: 'none'}}>
                    <h1 className="cta-text1">GET IN TOUCH</h1>
                </Link>
        );
    }
}

export default CTA;