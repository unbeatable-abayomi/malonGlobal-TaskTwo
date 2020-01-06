import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		const str = new Date();
		return (
			<div className="something">
				<div className="header_component">
					<div className="container">
						<div className="jumbotron bg-success">
							<center>
								<div className="bg-light cover">
									<img src="../img/logo1.png" className="img-fluid cover-img" alt="logo" />
								</div>
								<div className="time">{`${str}`}</div>
							</center>

							<ul>
								<Link to="/" style={{ textDecoration: 'none' }}>
									<li className="header_txt">General</li>
								</Link>
								<Link to="/sports" style={{ textDecoration: 'none' }}>
									<li className="header_txt">Sports</li>
								</Link>
								<Link to="/science" style={{ textDecoration: 'none' }}>
									<li className="header_txt">Science</li>
								</Link>
								<Link to="/technology" style={{ textDecoration: 'none' }}>
									<li className="header_txt">Technology</li>
								</Link>

								<Link to="/business" style={{ textDecoration: 'none' }}>
									<li className="header_txt">Business</li>
								</Link>
								<Link to="entertainment" style={{ textDecoration: 'none' }}>
									<li className="header_txt">Entertainment</li>
								</Link>

								<Link to="/health" style={{ textDecoration: 'none' }}>
									<li className="header_txt">Health</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
