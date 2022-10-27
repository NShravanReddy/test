import React from "react";
import logo from'./logo.svg';
function Header(){
    return(
      <header className='App-header'>
    <nav className='nav '>
            <img className="nav-logo" src={logo} alt='react' width="40px"/>
              <h1 className="head"><b>ReactFacts</b></h1>
              <div >
                  <ul className='nav-items'>
                    <li>React Course-Project 1</li>
                  </ul>
              </div>
    </nav>
    </header>
    )
}

export default Header;