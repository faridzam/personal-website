import React from 'react'
import {Link} from 'react-router-dom'


class CTA extends React.Component{
    render(){
        return(
                <Link to="/get-in-touch" style={{ textDecoration: 'none'}}>
                    <h1>GET IN TOUCH</h1>
                </Link>
        );
    }
}

export default CTA;