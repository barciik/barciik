import React, { useEffect, useRef } from 'react';
import classes from './aboutme.module.css';

const Aboutme = (props) => {
	const scrollRef = useRef();
	const goToProjectSection = () => {
		props.changeOffset(scrollRef.current.offsetTop);
	};
	useEffect(goToProjectSection, [props]);
	return (
		<div className={classes.container} ref={scrollRef}>
			<div className={classes.info}>
				<h2>About me</h2>
				<p>
					My full name is Bartłomiej Batko, I'm a 21 y/o aspiring front end
					developer from Poland. I'm currently on my first year of computer
					science studies at Dolnośląska szkoła wyzsza in Wrocław. In between
					coding and learning new things, I am a big fan of Formula 1 and I love
					playing video games.
				</p>
			</div>
			<div className={classes.info}>
				<img className={classes.me} src='/assets/tech.jpeg' alt='me' />
			</div>
		</div>
	);
};

export default Aboutme;
