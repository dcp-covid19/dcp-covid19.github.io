import React from 'react'; 
import DCPLogo from './DCPLogo';

const LINKS = [
  { label: 'Home', href: 'https://covid19.distributed.computer' },
  { label: 'Researcher', href: 'https://covid19.apps.distributed.computer' },
  { label: 'Worker', href: 'https://dcp.work' },
];

const Header = ({ activeLink, hideDivider=false }) => (
  <div>
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-12 col-md-auto">
          <DCPLogo className="ml-4 mr-4"/>
        </div>
        <div className="col" />
        <div className="col-12 col-md-auto d-flex align-items-center justify-content-end">
          <span className="m-2">
            { LINKS.map(({ label, href }) => (
              <a key={label} href={href} className={`mr-4 header-link ${activeLink === label? 'active' : ''}`}>{ label }</a>
            ))}
          </span>
        </div>
      </div>
    </div>
    { !hideDivider && <div className="colored-divider"></div> }
  </div>
)

export default Header;
