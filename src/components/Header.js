import React from 'react';

class Header extends React.Component{
  render() {
    return (
      <header className="header">
        <nav className="navigation">
          <div className="wordmark">
            <h4 className="wordmark1">Farid</h4>
            <h4 className="wordmark2">Zam</h4>
          </div>
          <div className="nav-option">
            <ul>
              <li>
                <h4 className="nav-option-about">
                  about
                </h4>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;