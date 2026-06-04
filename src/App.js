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
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Angular</span>
            <span>Express.js</span>
            <span>Node.js</span>
            <span>Git</span>
            <span>MONGODB</span>
            <span>NPM</span>
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
              <div className='prjct-content'></div>
            </div>
            <div className='project-card'>
              <div className='prjct-card-img'>
                <img />
              </div>
              <div className='prjct-content'></div>
            </div>
            <div className='project-card'>
              <div className='prjct-card-img'>
                <img />
              </div>
              <div className='prjct-content'></div>
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
