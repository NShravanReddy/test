import React from "react";
import logo from'./logo.svg';
function Header(){
    return(
      <header className='App-header'>
    <nav className='nav '>
            <img className="nav-logo" src={logo} alt='react' width="40px"/>
              <div >
                  <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
              </div>
    </nav>
    </header>
    )
}

export default Header;