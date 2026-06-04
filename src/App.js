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
            <a href='mailto:calvinkugonza@gmail.com'>Email</a>
            <a href='#'>GitHub</a>
            <a href='#'>LinkedIn</a>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' aria-labelledby='skills-heading'>
          <h2 id='skills-heading'>Skills</h2>
          <div className='skills-grid'>
            <div>
              <img src='./HTML5_logo.png' />
              <span>HTML</span>
            </div>
            <div>
              <img src='./CSS.png' />
              <span>CSS</span>
            </div>
            <div>
              <img src='./JavaScript-logo.png' />
              <span>JavaScript</span>
            </div>
            <div>
              <img src='./logo.svg'/>
              <span>React.js</span>
            </div>
            <div>
              <img src='./Angular_logo.png' />
              <span>Angular</span>
            </div>
            <div>
              <img src='./express-js.png' />
              <span>Express.js</span>
            </div>
            <div>
              <img src='./Node.js_logo.png' />
              <span>Node.js</span>
            </div>
            <div>
              <img src='./Git_logo.png' />
              <span>Git</span>
            </div>
            <div>
              <img src='./Mongodb_Logo.png' />
              <span>MONGODB</span>
            </div>
            <div>
              <img src='./NPM.png'/>
              <span>NPM</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' aria-labelledby='projects-heading'>
          <h2 is='projects-heading'>Projects</h2>
          <div className='project-grid'>
            <div className='project-card'>
              <div className='prjct-card-img'>
                <img />
              </div>
              <div className='prjct-content'>
                <h3>Posh Paws Boarding</h3>
                <p>Dog and Cat boarding local business</p>
                <div>
                  <a>Live Project</a>
                  <a>GitHub Repo</a>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <div className='prjct-card-img'>
                <img />
              </div>
              <div className='prjct-content'>
                <h3>Travlr Website</h3>
                <p>Travel website for destinations and resorts</p>
                <div>
                  <a>Live Project</a>
                  <a>GitHub Repo</a>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <div className='prjct-card-img'>
                <img />
              </div>
              <div className='prjct-content'>
                <h3>Photomemories</h3>
                <p>Photo and Videography local business</p>
                <div>
                  <a>Live Project</a>
                  <a>GitHub Repo</a>
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
