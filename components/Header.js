import React from 'react'; 
import DCPLogo from './DCPLogo';

const LINKS = [
  { label: 'Home' },
  { label: 'Researcher' },
  { label: 'Worker' },
];

const Header = ({ activeLink }) => (
  <>
    <div className="container-fluid d-flex align-items-center justify-content-between p-4">
      <DCPLogo className="ml-4"/>
      <span className="mr-2">
        { LINKS.map(({ label }) => (
          <a href="#" className={`mr-4 header-link ${activeLink === label? 'active' : ''}`}>{ label }</a>
        ))}
      </span>
    </div>
    <div className="colored-divider"></div>
  </>
)

export default Header;
