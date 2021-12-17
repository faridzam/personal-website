import React from 'react'
import Logo from '../assets/logo.svg'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-main">
                <div className="footer-address">
                    <div className="footer-logo">
                        <span>
                            <img src={Logo} alt="logo"/>
                        </span>
                    </div>
                    <div className="footer-address-text">
                        <p>
                            Kiri Kopi, Pabongan. <br/>
                            Jalan Flamboyan RT 03 RW 05, <br/>
                            Leyangan, Kabupaten Semarang, 50514
                        </p>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li>
                                <p>Dribbble</p>
                            </li>
                            <li>
                                <p>Github</p>
                            </li>
                            <li>
                                <p>Instagram</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex-break-footer"></div>
                
                <div className="footer-copyright">
                    <p>
                        A creative agency with attitude. <br/>
                        All Rights Reserved. Copyright 2021 ©
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;