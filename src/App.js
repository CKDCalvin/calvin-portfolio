import './App.css';

function App() {
  return (
    <div className="App">
      
        <header className="site-header d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
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
            <a href='mailto:calvinkugonza@gmail.com' className='pf-links'><img src='./email-100.png' className='pf-img' alt='emial icon'/></a>
            <a href='https://github.com/CKDCalvin' className='pf-links'><img src='./github-100.png' className='pf-img' alt='github icon'/></a>
            <a href='https://www.linkedin.com/in/calvin-kugonza/' className='pf-links'><img src='./linkedin-100.png' className='pf-img'  alt='linkedin icon'/></a>
          </div>

          <div id='resume'>
            <a href='./RESUME.pdf' download="Calvin's_Resume.pdf">Download Resume</a>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' aria-labelledby='skills-heading' className='section'>
          <h2 id='skills-heading'>Skills</h2>
          <div className='skills-grid'>
            <div className='skill-card'>
              <img src='./HTML5_logo.png' alt='html logo' />
              <span>HTML</span>
            </div>
            <div className='skill-card'>
              <img src='./CSS.png' alt='css logo' />
              <span>CSS</span>
            </div>
            <div className='skill-card'>
              <img src='./bootstrap-fill.svg' alt='bootstrap logo' />
              <span>Bootstrap</span>
            </div>
            <div className='skill-card'>
              <img src='./JavaScript-logo.png' alt='javascript logo'/>
              <span>JavaScript</span>
            </div>
            <div className='skill-card'>
              <img src='./icons8-react-js-100.png' alt='react js logo'/>
              <span>React.js</span>
            </div>
            <div className='skill-card'>
              <img src='./Angular_logo.png' alt='angular logo'/>
              <span>Angular</span>
            </div>
            <div className='skill-card'>
              <img src='./express-js.png' alt='express logo' />
              <span>Express.js</span>
            </div>
            <div className='skill-card'>
              <img src='./Node.js_logo.png' alt='node js logo'/>
              <span>Node.js</span>
            </div>
            <div className='skill-card'>
              <img src='./Git_logo.png' alt='git logo'/>
              <span>Git</span>
            </div>
            <div className='skill-card'>
              <img src='./mongo-db-100.png' alt='mongo logo'/>
              <span>MONGODB</span>
            </div>
            <div className='skill-card'>
              <img src='./NPM.png' alt='npm logo'/>
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
                <img src='./PoshPawsHomePage.png' className='prjct-img' alt='posh paws boarding overview'/>
              </div>
              <div className='prjct-content'>
                <h3 className='prjctTitle'>Posh Paws Boarding</h3>
                <p className='prjctTech'>React • Node.js • Express • MongoDB </p>
                <div className='prjct-btns'>
                  <a href="https://poshpawsboarding.netlify.app/" className='projectLink'>Live Project</a>
                  <a href='https://github.com/CKDCalvin/posh-paws-boarding' className='githubLink'>GitHub Repo</a>
                </div>
              </div>
            </div>

            {/* Photomemories Photography Business */}
            <div className='project-card'>
              <div className='prjct-card-img'>
                <img src='./PhotoMemoHomePage.png' className='prjct-img' alt='photomemories business overview'/>
              </div>
              <div className='prjct-content'>
                <h3 className='prjctTitle'>Photomemories</h3>
                <p className='prjctTech'>HTML • CSS • JAVASCRIPT</p>
                <div className='prjct-btns'>
                  <a href="https://photomemoriesv1.netlify.app/" className='projectLink'>Live Project</a>
                  <a href='https://github.com/CKDCalvin/Photomemories' className='githubLink'>GitHub Repo</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2026 Calvin Kugonza</p>
        <p>Built with React and Bootstrap</p>
      </footer>
    </div>
  );
}

export default App;
