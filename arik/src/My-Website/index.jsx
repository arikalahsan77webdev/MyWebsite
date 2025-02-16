import React from "react";
import ContactUs from "./Contact";
import Load from "./load";

function index() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Arik Al Ahsan" />
    <title>Arik Al Ahsan</title>
    <meta name="google-adsense-account" content="ca-pub-3843700700435263" />
    <meta
      name="keywords"
      content="Arik,Arik Al Ahsan,Arik Ahsan,Web Dev,Arik Website,Arik Al Ahsan Website"
    />
    <meta
      name="description"
      content="Hi, I'm Arik Al Ahsan, a Backend Web Developer. I work with HTML, CSS, JavaScript, React, Node.js, PHP, MySQL, Bootstrap, and Tailwind CSS."
    />
    <link
      rel="shortcut icon"
      href="A-removebg-preview (1).png"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <main>
      <header id="header">
        <div className="header_main">
          <div className="logo">
            <h1>Arik Al Ahsan</h1>
          </div>
          <div className="nav_area">
            <nav>
              <ul>
                <li>
                  <a href="#hero_area">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header_btn">
            <a href="">
              <i className="fa-solid fa-envelope" /> Hire Me
            </a>
          </div>
        </div>
      </header>
      {/* hero area */}
      <section id="hero_area">
        <div className="containir">
          <div className="hero_main">
            <div className="left_side">
              <h3>Hello, It's Me</h3>
              <h2>Arik Al Ahsan</h2>
              <h4>
                {" "}
                And I'm <span>Backend Web Developer.</span>
              </h4>
              <p>
                I'm a Backend Web Developer from Sartkhira, Bangladesh,
                specializing in WordPress, Elementor, and Professional graphic
                designer. I create dynamic websites and provide creative design
                solutions for businesses and individuals.
              </p>
              <div className="hero_btn">
                <a href="#about">
                  About Me
                  <i className="fa-solid fa-user" />
                </a>
                <a href="#">
                  Project
                  <i className="fa-solid fa-eye" />
                </a>
              </div>
            </div>
            <div className="right_side">
              <img src="arik.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* about me */}
      <section id="about">
        <div className="containir">
          <h3>About Me:</h3>
          <p>
            Hi i'm Arik Al Ahsan, you're a talented Backend Web Developer,
            WordPress, and WordPress Elementor specialist. Alongside your
            expertise in web development, you're also a Professional Graphic
            Designer, combining technical skills with creative design. Your
            dedication to delivering high-quality, functional, and visually
            appealing projects reflects your passion and commitment to your craft.
            Keep up the great work! 😊.
          </p>
        </div>
      </section>
      <section id="sec_about">
        <div className="containir">
          <div className="sec_about_main">
            <span className="year">1+</span>
            <p>
              Backend Web Developer with 1+ years of experience, specializing in
              creating dynamic web applications. He ensures a seamless user
              experience and focuses on delivering innovative, efficient solutions
              tailored to meet client requirements effectively.
            </p>
          </div>
        </div>
      </section>
      <div className="skil">
        <h5>My Skills</h5>
      </div>
      <section id="my_Skil">
        <div className="containir">
          <div className="skil_main">
            <div className="skil_child">
              <i
                className="fa-brands fa-html5"
                style={{ fontSize: 45, marginTop: "-20px" }}
              />
              <h4>Html</h4>
              <p>
                Building the structure of web pages with semantic elements, forms,
                and accessibility features.
              </p>
            </div>
            <div className="skil_child">
              <i className="fa-brands fa-css3" />
              <h4>CSS</h4>
              <p>
                Styling and designing web pages, including layout techniques like
                Flexbox, Grid, and responsive design.
              </p>
            </div>
            <div className="skil_child">
              <i className="fa-brands fa-js" />
              <h4>JavaScript</h4>
              <p>
                Creating dynamic web pages with JS, including DOM manipulation,
                event handling, and asynchronous operations.
              </p>
            </div>
            <div className="skil_child">
              <i className="fa-brands fa-wordpress" />
              <h4>WordPress</h4>
              <p>
                Developing websites using WordPress themes, plugins, and
                customizations to create content management systems.
              </p>
            </div>
            <div className="skil_child">
              <i className="fa-brands fa-react" />
              <h4>React</h4>
              <p>
                Building interactive user interfaces and single-page applications
                using React, hooks, and state management.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Loading Screen  */}

       {/* <div id="loading-screen">
        <div className="welcome-text">Welcome to my website Arik Al Ahsan</div>
        <div className="dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div> */}
        <Load />

     {/* Project */}
      <section id="project">
        <h3 className="project">My Projects</h3>
        <div className="containir">
          <div className="main_project">
            <div className="project-card">
              <img
                src="./project1.png"
                alt="Project Image"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">English to Bangla Converter</h3>
                <p className="project-description">
                  English to Bangla Converter Made By Arik
                </p>
                <a
                  href="https://englishtobanglaconvator.netlify.app/"
                  target="_blank"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <img
                src="project1.png"
                alt="Project Image"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">English to Bangla Converter</h3>
                <p className="project-description">
                  English to Bangla Converter Made By Arik
                </p>
                <a href="project-link.html" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <img
                src="project1.png"
                alt="Project Image"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">English to Bangla Converter</h3>
                <p className="project-description">
                  English to Bangla Converter Made By Arik
                </p>
                <a href="project-link.html" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <img
                src="project1.png"
                alt="Project Image"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">English to Bangla Converter</h3>
                <p className="project-description">
                  English to Bangla Converter Made By Arik
                </p>
                <a href="project-link.html" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*Contact From*/}
      <section id="contact">
        <div className="containir">
          <div className="contact_main">
            <div className="left_side_contact">
              <h3>Connect with me:</h3>
              <span>Satisfied with me? Please contact me.</span>
              <div className="socal_icon">
                <a href="https://www.facebook.com/arikalahsan77webdev">
                  {" "}
                  <i className="fa-brands fa-facebook" />
                </a>{" "}
                <a href="https://www.instagram.com/arikalahsan77webdev/">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://dribbble.com/arikwebdev77">
                  {" "}
                  <i className="fa-brands fa-dribbble" />
                </a>
                <a href="mailto:arikalahsan179@gmail.com">
                  <i className="fa-solid fa-envelope" />
                </a>
              </div>
            </div>
            <div className="right_side_contact">
              <h4>Contact me, let’s make magic together 😊.</h4>
            
              <ContactUs />
            </div>
          </div>
        </div>
      </section>
      <div className="top">
        <a href="#hero_area">
          <i className="fa-solid fa-arrow-up" />
        </a>
      </div>
      {/* Footer */}
      <div className="containir">
        <footer>
          <span>@2025 Arik Al Ahsan</span>
          <span>Backend Developer</span>
          <span>Graphic Designer</span>
          <span>Designed by @arikwebdev</span>
          <span>Sartkhira, Bangladesh</span>
          <div className="socal">
            <a href="https://www.facebook.com/arikalahsan77webdev">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://www.instagram.com/arikalahsan77webdev/">
              {" "}
              <i className="fa-brands fa-instagram" />
            </a>{" "}
            <a href="https://dribbble.com/arikwebdev77">
              <i className="fa-brands fa-dribbble" />
            </a>
            <a href="mailto:arikalahsan179@gmail.com">
              {" "}
              <i className="fa-solid fa-envelope" />
            </a>{" "}
          </div>
        </footer>
      </div>
    </main>
    
  </>
  
  )
}

export default index
