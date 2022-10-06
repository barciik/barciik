import React from 'react';
import classes from './project.module.css';

const Project = (props) => {
	console.log(props.link);
	return (
		<div className={classes.card}>
			<img className={classes.image} src={props.image} alt='' />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<button className={classes.more}>
				<a href={props.link} target='_blank' rel="noopener noreferrer">See more...</a>
			</button>
		</div>
	);
};

export default Project;
