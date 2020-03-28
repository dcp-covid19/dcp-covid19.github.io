import Header from '../components/Header';

const Index = () => (
  <div className="w-100 h-100 d-flex flex-column covid-bg">
    <Header activeLink="Home" hideDivider />
    <div className="container flex-grow-1 d-flex align-items-center">
      <div style={{ marginBottom: '200px' }}>
        <div className="d-flex align-items-center">
          <img src="https://dcp-covid19.github.io/logo.svg" alt="dcp-covid19 logo"></img>
          <h2 className="ml-4">Crowdsourcing compute power to model<br />
            <span className="text-green">COVID-19 transmission patterns</span>
          </h2>
        </div>
        <p className="mt-2 w-75">Help identify disease clusters, spatial patterns and methods of transmission of endemic, epidemic and pandemic diseases which are essential to inform policymakers, programs, and interventions at both local and global scales. The results will inform community-specific public health interventions to maximize recovery and minimize economic impacts.</p>
        <div className="d-flex align-items-center">
          <span className="mr-4">I want to help fight COVID-19 by...</span>
          <a href="https://covid19.apps.distributed.computer" className="btn btn-outline-success mr-3">Researching</a>
          <a href="https://dcp.work" className="btn btn-success">Computing</a>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
