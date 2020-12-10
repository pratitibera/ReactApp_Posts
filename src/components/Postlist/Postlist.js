import React from 'react';
import styles from './Postlist.module.css';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap'
import logo from './4.png';
// import Postlist from '../Postlist/Postlist';
const Postlist = ({post}) => {
	return (
		<div>	
			<li>
				<div className={styles.box} style={{position: 'relative'}}>
					<div style={{zIndex: '9999', display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'center'}}>
						<div className={styles.slidedetails} style={{color: 'red'}}>
							<p>{post.title}</p>
						</div>
						<div className={styles.slidedetails2}>
							<Link to={{ pathname: `/post/${post.id}`, data: post}}><Button className={styles.btn}>VIEW POST</Button></Link>
						</div>
					</div>
					<img src={logo} style={{position: 'absolute', width: '100%', height: '100%', zIndex: '0', top: '-500px'}}/>
				</div>
			</li>	
		</div>
	)
}

export default Postlist;