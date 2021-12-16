import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{
  render() {
    return (
      <header className="header">
        <nav className="navigation">
          <Link to="/" style={{ textDecoration: 'none', color: '#f2f2f2' }} className="wordmark">
            <h4 className="wordmark1">Farid</h4>
            <h4 className="wordmark2">Zam</h4>
          </Link>
          <div className="nav-option">
            <ul>
              <li>
                <Link to="/about" className="nav-option-about" style={{ textDecoration: 'none', color: '#f2f2f2' }}>about</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;