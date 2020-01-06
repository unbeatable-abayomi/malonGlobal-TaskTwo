import React from 'react';
import { Link } from 'react-router-dom';


function Test() {
	return (
		<div className="container">
			<div className="jumbotron bg-success">
				<center>
                    
                    <div className='bg-light cover'>
                    <img src='../img/logo1.png' className='img-fluid cover-img' alt='logo'/>
                    </div>
                    
				</center>

				<Link className="text-white" to="/">
					{' '}
					Lastest News
				</Link>
                <ul>
                <Link to=''>
                <li className="text-white">General</li>
                </Link>
                    <Link to='/sports'>
                    <li className="text-white">Sports</li>
                    </Link>
                    <Link to='/science'>
                    <li className="text-white">Science</li>
                    </Link>
                    <Link to='/technology'>
                    <li className="text-white">Technology</li>
                    </Link>
                   
                    <Link to='/business'>
                    <li className="text-white">Business</li>
                    </Link>
                    <Link to='entertainment'>
                    <li className="text-white">Entertainment</li>
                    </Link>
					
                    <Link to="/health">
                    <li className="text-white">Health</li>
                    </Link>
					
				</ul>
			</div>
		</div>
	);
}
export default Test;
