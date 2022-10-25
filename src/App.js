import logo from './logo.svg';
import './App.css';


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
function MainContent(){
  return(
<div className='App'>

  <h1>Top Reasons to learn react</h1>
    <ol>Reasons to learn react
    <li>Open source</li>
    <li>Easy to understand</li>
    </ol>
    </div>
  )
}
function App(){
  return(
<div>
  <Header/>
  <MainContent/>

  <Footer/>
</div>

  )
}
function Footer(){
  return(
    <footer>@ 2022 n3techs. All rights reserved.</footer>
  )
}
export default  App;