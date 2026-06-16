import './App.css';

function App() {
  return (
    <div className="App">
      
        <header className="site-header d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            {/* <svg class="bi me-2" width="40" height="32" aria-hidden="true"><use></use></svg> */}
            <img src='./LogoInitial.png' alt='Name initials logo' className='pf-img' />
            <span className="fs-4">Calvin Kugonza</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#skills" className="nav-link active" aria-current="page">Skills</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          </ul>

        </header>
    
      <main>
        {/* Introduction Section */}
        <section aria-labelledby='intro-heading'>
          {/* Intro text Container */}
          <div className='intro-txt'>
            <p>I'm a software engineer building dynamic web applications that combine clean
              user experiences with reliable backend functionality. My skills include React,
              JavaScript, Bootstrap, Node.js, Express, and MongoDB. I've developed full-stack applications,
              designed REST APIs, and turned ideas into functional software solutions.
            </p>
          </div>

          {/* Contact links container */}
          <div className='contact-links'>
            <a href='mailto:calvinkugonza@gmail.com' className='pf-links'><img src='./email-100.png' className='pf-img' /></a>
            <a href='https://github.com/CKDCalvin' className='pf-links'><img src='./github-100.png' className='pf-img' /></a>
            <a href='https://www.linkedin.com/in/calvin-kugonza/' className='pf-links'><img src='./linkedin-100.png' className='pf-img' /></a>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' aria-labelledby='skills-heading' className='section'>
          <h2 id='skills-heading'>Skills</h2>
          <div className='skills-grid'>
            <div className='skill-card'>
              <img src='./HTML5_logo.png' />
              <span>HTML</span>
            </div>
            <div className='skill-card'>
              <img src='./CSS.png' />
              <span>CSS</span>
            </div>
            <div className='skill-card'>
              <img src='./bootstrap-fill.svg' />
              <span>Bootstrap</span>
            </div>
            <div className='skill-card'>
              <img src='./JavaScript-logo.png' />
              <span>JavaScript</span>
            </div>
            <div className='skill-card'>
              <img src='./icons8-react-js-100.png' />
              <span>React.js</span>
            </div>
            <div className='skill-card'>
              <img src='./Angular_logo.png' />
              <span>Angular</span>
            </div>
            <div className='skill-card'>
              <img src='./express-js.png' />
              <span>Express.js</span>
            </div>
            <div className='skill-card'>
              <img src='./Node.js_logo.png' />
              <span>Node.js</span>
            </div>
            <div className='skill-card'>
              <img src='./Git_logo.png' />
              <span>Git</span>
            </div>
            <div className='skill-card'>
              <img src='./mongo-db-100.png' />
              <span>MONGODB</span>
            </div>
            <div className='skill-card'>
              <img src='./NPM.png' />
              <span>NPM</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' aria-labelledby='projects-heading' className='section'>
          <h2 id='projects-heading'>Projects</h2>
          <div className='project-grid'>
            {/*Posh Paws Boarding */}
            <div className='project-card'>
              <div className='prjct-card-img'>
                <img src='./PoshPawsHomePage.png' className='prjct-img' />
              </div>
              <div className='prjct-content'>
                <h3 className='prjctTitle'>Posh Paws Boarding</h3>
                <p className='prjctDesc'>Dog and Cat boarding local business</p>
                <div className='prjct-btns'>
                  <a href="https://poshpawsboarding.netlify.app/" className='projectLink'>Live Project</a>
                  <a href='https://github.com/CKDCalvin/posh-paws-boarding' className='githubLink'>GitHub Repo</a>
                </div>
              </div>
            </div>

            {/* Photomemories Photography Business */}
            <div className='project-card'>
              <div className='prjct-card-img'>
                <img src='./PhotoMemoHomePage.png' className='prjct-img' />
              </div>
              <div className='prjct-content'>
                <h3 className='prjctTitle'>Photomemories</h3>
                <p className='prjctDesc'>Photo and Videography local business</p>
                <div className='prjct-btns'>
                  <a href="https://photomemoriesv1.netlify.app/" className='projectLink'>Live Project</a>
                  <a href='https://github.com/CKDCalvin/Photomemories' className='githubLink'>GitHub Repo</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
