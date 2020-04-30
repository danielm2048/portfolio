import React, { Component } from "react";

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">
									Recent Projects
								</h2>
							</div>
						</div>
						<div className="row">
							<div
								className="col-md-4 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<div
									className="project"
									style={{ backgroundImage: "url(images/img-1.jpg)" }}
								>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="https://movie-affiliates.herokuapp.com">
													Work 01
												</a>
											</h3>
											<span>Movie Store</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-md-4 animate-box"
								data-animate-effect="fadeInRight"
							>
								<div
									className="project"
									style={{
										backgroundImage: "url(images/img-2.jpg)",
									}}
								>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="/Quote-Machine">Work 02</a>
											</h3>
											<span>Quote Machine</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-md-4 animate-box"
								data-animate-effect="fadeInTop"
							>
								<div
									className="project"
									style={{ backgroundImage: "url(images/img-3.jpg)" }}
								>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="/Calculator">Work 03</a>
											</h3>
											<span>Calculator</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-md-4 animate-box"
								data-animate-effect="fadeInBottom"
							>
								<div
									className="project"
									style={{ backgroundImage: "url(images/img-4.jpg)" }}
								>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="/Pomodoro-Clock">Work 04</a>
											</h3>
											<span>Pomodoro Clock</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-md-4 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<div
									className="project"
									style={{
										background: "linear-gradient(54deg, #3e84e4, #e13030)",
									}}
								>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="/Markdown-Preview">Work 05</a>
											</h3>
											<span>Markdown Preview</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-md-4 animate-box"
								data-animate-effect="fadeInRight"
							>
								<div
									className="project"
									style={{ backgroundImage: "url(images/img-6.jpg)" }}
								>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="/Drum-Machine">Work 06</a>
											</h3>
											<span>Drum Machine</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
