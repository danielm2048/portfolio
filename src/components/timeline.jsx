import React, { Component } from "react";

export default class Timeline extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-experience" data-section="timeline">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">highlights</span>
								<h2 className="colorlib-heading animate-box">Timeline</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="timeline-centered">
									<article
										className="timeline-entry animate-box"
										data-animate-effect="fadeInLeft"
									>
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-1">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													To Be Continued... <span>2019-present</span>
												</h2>
												<p>
													Searching for my next adventure! Hope I can learn
													something new everyday and have a ton of fun in the
													process ofcourse :)
												</p>
											</div>
										</div>
									</article>
									<article
										className="timeline-entry animate-box"
										data-animate-effect="fadeInTop"
									>
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-2">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													IDF <span>2017-2019</span>
												</h2>
												<p>
													Got enrolled as a combat soldier at 405 battalion in the
													Artillery Corps. Did a teleprocessing course and
													returned to my original unit. Even though it wasn't in
													my cards I still found a way to show my love for the
													field, in time I became the Head of Computers and
													Information Technology Manager at my unit. I also got
													to be the sergant of my department. Learned a lot from
													my time at the IDF, earned knowledge and friends for
													life.
												</p>
											</div>
										</div>
									</article>
									<article
										className="timeline-entry animate-box"
										data-animate-effect="fadeInLeft"
									>
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-5">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													Ben Gurion High School <span>2013-2016</span>
												</h2>
												<p>
													Expanded Computer Science and Software Engineering and
													got the love for coding. I also expanded Math, English
													and Chemistry.
												</p>
											</div>
										</div>
									</article>
									<article
										className="timeline-entry begin animate-box"
										data-animate-effect="fadeInBottom"
									>
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-none"></div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
