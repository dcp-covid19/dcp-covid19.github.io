import React, {useState, useEffect, useCallback} from 'react';
import DCPLogo from './DCPLogo';

const LINKS = [
  { label: 'Home', href: 'https://covid19.distributed.computer' },
  { label: 'Researcher', href: 'https://covid19.apps.distributed.computer' },
  { label: 'Worker', href: 'https://dcp.work' },
];

const Header = ({ activeLink, hideDivider=false }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setNavOpen((open) => !open);
  }, [setNavOpen]);

  return (
    <header className="main-header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <DCPLogo className=""/>
        <button className="navbar-toggler" onClick={toggleNav} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            { LINKS.map(({ label, href }) => (
              <li key={label} className="nav-item">
                <a href={href} className={`nav-link header-link ${activeLink === label? 'active' : ''}`}>{ label }</a>
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
