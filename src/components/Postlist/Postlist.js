import React from 'react';
import styles from './Postlist.module.css';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap'
import logo from './4.png';
const Postlist = ({post}) => {
	return (
		<div className={styles.box} style={{position: 'relative'}}>	
				<img src={logo} style={{position: 'absolute', width: '100%', height: '100%', zIndex: '0'}}/>
				<div style={{position: 'absolute', zIndex: '5', display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'center', width: '100%', height: '100%'}}>
					<div className={styles.slidedetails} style={{color: 'red'}}>
						<p>{post.title}</p>
					</div>
					<div className={styles.slidedetails2}>
						<Link to={{ pathname: `/post/${post.id}`, data: post}}><Button className={styles.btn}>VIEW POST</Button></Link>
					</div>
				</div>	
		</div>
	)
}

export default Postlist;