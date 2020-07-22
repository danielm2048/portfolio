import React, { Component } from "react";

export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div>
					<nav
						href="#navbar"
						className="js-colorlib-nav-toggle colorlib-nav-toggle"
						data-toggle="collapse"
						data-target="#navbar"
						aria-expanded="false"
						aria-controls="navbar"
					>
						<i />
					</nav>
					<aside id="colorlib-aside" className="border js-fullheight">
						<div className="text-center">
							<div
								className="author-img"
								style={{ backgroundImage: "url(images/about.jpg)" }}
							/>
							<h1 id="colorlib-logo">
								<a href="index.html">Daniel Mimoun</a>
							</h1>
							<span className="position">Full Stack Developer in Israel</span>
							<span className="position">
								Student of Life and Computers <i className="icon-headphones" />
							</span>
						</div>
						<nav id="colorlib-main-menu" role="navigation" className="navbar">
							<div id="navbar" className="collapse">
								<ul>
									<li className="active">
										<a href="#home" data-nav-section="home">
											Introduction
										</a>
									</li>
									<li>
										<a href="#about" data-nav-section="about">
											About
										</a>
									</li>
									<li>
										<a href="#skills" data-nav-section="skills">
											Skills
										</a>
									</li>
									<li>
										<a href="#timeline" data-nav-section="timeline">
											Timeline
										</a>
									</li>
									<li>
										<a href="#projects" data-nav-section="projects">
											Projects
										</a>
									</li>
									<li>
										<a href="#contact" data-nav-section="contact">
											Contact
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<nav id="colorlib-main-menu">
							<ul>
								<li>
									<a
										href="https://www.linkedin.com/in/daniel-mimoun-6b05201a3/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="icon-linkedin2" />
									</a>
								</li>
								<li>
									<a
										href="https://github.com/danielm2048"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="icon-github" />
									</a>
								</li>
							</ul>
						</nav>
						<div className="colorlib-footer">
							<p>
								<small>
									<i className="icon-code" aria-hidden="true" /> with{" "}
									<i className="icon-heart" aria-hidden="true" />
									<br></br>
									Thanks{" "}
									<a
										href="https://colorlib.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										Colorlib
									</a>{" "}
									for inspiration
								</small>
							</p>
						</div>
					</aside>
				</div>
			</div>
		);
	}
}
