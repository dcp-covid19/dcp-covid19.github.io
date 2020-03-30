import React, {useState, useEffect} from 'react';
import DCPLogo from './DCPLogo';
import { slide as Menu } from 'react-burger-menu'

const LINKS = [
  { label: 'Home', href: 'https://covid19.distributed.computer' },
  { label: 'Researcher', href: 'https://covid19.apps.distributed.computer' },
  { label: 'Worker', href: 'https://dcp.work' },
];

const Header = ({ activeLink, hideDivider=false }) => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  return (
    <header className="main-header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <DCPLogo className=""/>
        <button class="navbar-toggler" onClick={toggleNav} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class={"collapse navbar-collapse " + (navOpen ? "show" : "")} id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            { LINKS.map(({ label, href }) => (
              <li className="nav-item">
                <a key={label} href={href} className={`nav-link header-link ${activeLink === label? 'active' : ''}`}>{ label }</a>
              </li>
            ))}
          </ul>
        </div>
        </nav>
      { !hideDivider && <div className="colored-divider"></div> }
    </header>
  )
}

export default Header;
