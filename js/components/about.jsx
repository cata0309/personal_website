"use strict";

const React = require('react');
const Link = require('react-router').Link;

const About = React.createClass({
  render () {
    return (
      <div>
        <div>
          <div>
            <br />
            {/* <img src="icons/workspace.png" className="full_width"></img> */}
            <h4>About Me</h4>
          </div>
          {/* <br /> */}
          <div id="elevator_pitch">
            {/* <img src="icons/lab.png" className="partial_width partial_width_centered"></img> */}
            <h2>From Science to Tech</h2>
            <p>
              While working in clinical research, my time was split between administrative tasks, technology concepts, science, and health care. While learning how to use Bash and MatLab for MRI image processing/analysis, I discoverd that the same principles could apply to the rest of my work. I continued to learn Python and SQL to automate as much of the study's procedures as possible, freeing up enough of my time to take on new responsibilites when the senior team leader resigned.
              <br /><br />
              I grew into a role of improving our procedures and data with technology and am most proud of the management system I developed for our research visit summaries (<a href="https://github.com/fonsecapeter/jarvs">Jarvs</a>). While working on these projects, I realized that my greatest services to the study came through programming. Not only was I making my co-workers lives easier, I was helping our research participants recieve better care.
              <br /><br />
              I also enjoyed this work more than my other responsibilities. It kept me working early in the morning and late at night, and I couldn't help myself from finishing a new project. I decided that I wanted to do it every day and my goal is to continue learning how I can leverage technology to help others.
              <br /><br />
            </p>
          </div>
          <div>
            <h1>Languages I Work With:</h1>
            {/* <img src="icons/code-logos.png" className="partial_width"></img> */}
            <ul className="code-list">
              <li>Python (<a href="https://www.djangoproject.com/" target="_blank">Django</a>)</li>
              <li>JavaScript (<a href="https://facebook.github.io/react/" target="_blank">React</a>, <a href="https://jasmine.github.io/" target="_blank">Jasmine</a>, <a href="https://facebook.github.io/flux/" target="_blank">Flux</a>, <a href="https://nodejs.org/en/" target="_blank">Node</a>)</li>
              <li>Ruby (<a href="http://rubyonrails.org/" target="_blank">Rails</a>, <a href="http://rspec.info/" target="_blank">Rspec</a>)</li>
              <li>SQL</li>
              <li>Bash</li>
              <li>Matlab</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          <br /><br />
        </div>
      </div>
    );
  }
});

module.exports = About;
