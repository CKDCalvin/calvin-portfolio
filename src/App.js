import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        {/* Introduction Section */}
        <section aria-labelledby='intro-heading'>
          {/* Header row for logo, name, and nav */}
          <div className='header-row'>
            <div id='logo'>
              <img src='./LogoInitial.png'/>
              <h1>Calvin Kugonza</h1>
            </div>
            <div>
              <nav>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
              </nav>
            </div>
          </div>

          {/* Intro text Container */}
          <div className='intro-txt'>
            <p>I'm a software engineer building dynamic web applications that combine clean
              user experiences with reliable backend functionality. My skills include React,
              JavaScript, Node.js, Express, and MongoDB. I've developed full-stack applications,
              designed REST APIs, and turned ideas into functional software solutions.
            </p>
          </div>

          {/* Contact links container */}
          <div className='contact-links'>
            <a href='mailto:calvinkugonza@gmail.com' className='pf-links'><img src='./email-100.png' className='pf-img' /></a>
            <a href='https://github.com/CKDCalvin' className='pf-links'><img src='./github-100.png' className='pf-img' /></a>
            <a href='#' className='pf-links'><img src='./linkedin-100.png' className='pf-img' /></a>
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
              <img src='./JavaScript-logo.png' />
              <span>JavaScript</span>
            </div>
            <div className='skill-card'>
              <img src='./icons8-react-js-100.png'/>
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
              <img src='./NPM.png'/>
              <span>NPM</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' aria-labelledby='projects-heading' className='section'>
          <h2 is='projects-heading'>Projects</h2>
          <div className='project-grid'>
            {/*Posh Paws Boarding */}
            <div className='project-card'> 
              <div className='prjct-card-img'>
                <img src='./PoshPawsHomePage.png' className='prjct-img'/>
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

            {/* <div className='project-card'>
              <div className='prjct-card-img'>
                <img src='TravlrHomePage.png' className='prjct-img' />
              </div>
              <div className='prjct-content'>
                <h3 className='prjctTitle'>Travlr Website</h3>
                <p className='prjctDesc'>Travel website for destinations and resorts</p>
                <div className='prjct-btns'>
                  <a href="" className='projectLink'>Live Project</a>
                  <a href='' className='githubLink'>GitHub Repo</a>
                </div>
              </div>
            </div> */}  

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

        {/* BODDY {
      inside body:
      NAV {
      INSIDE nav: 
      logo of my initials on the left,
      two buttons grouped in a div. 
      one button for work/experince 
      and the other for projects
      }

      First section is introduction with a picture of myself on the left and below the picture
      social links such as email, phone number

      Second section is for Expireince or teck stack that are to be rendered button like glossy background 

      third are the projects i have worked on using various tech stacks rendered as cards with a 
      and glassy look to them and corresponding tech stacks below an image of the project but within
      the card component.
      }
       */}
      </main>
    </div>
  );
}

export default App;
