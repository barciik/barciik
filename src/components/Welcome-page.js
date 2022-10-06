import React from 'react';
import classes from './Welcome-page.module.css'
const WelcomeSection = (props) => {
	return (
		<div className={classes.mainSection}>
			<h2>Hello!</h2>
			<p>My name is Bartek and this is my site.</p>
			<button className={classes.scroll} onClick={props.onScroll}><img src='/assets/arrow.svg' alt='Scroll down button'/></button>
		</div>
	);
};

export default WelcomeSection;
