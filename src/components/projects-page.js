import React from 'react';
import Project from './project';
import classes from './projects-page.module.css';

const projects = [
	{
		image: '/foodAppImg.png',
		title: 'Food ordering app',
		description:
			'A simple demo food ordering app using react, redux and react routes',
		link: 'https://barciik.github.io/food-app/#/',
	},
	{
		image: '/assets/test2.png',
		title: 'Todo list',
		description:
			'Todo app with async js using firebase to store data.',
		link: 'https://barciik.github.io/',
	},
	{
		image: '/assets/test1.png',
		title: 'Title3',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut minus atque maiores similique, quisquam qui explicabo ipsam omnis vitae fuga voluptas vero officiis voluptatum consequatur quasi, quos amet distinctio ipsum?',
		link: 'https://barciik.github.io/',
	},
];

const ProjectsPage = (props) => {
	// const scrollRef = useRef();
	// const goToProjectSection = () => {
	// 	props.changeOffset(scrollRef.current.offsetTop)
	// };
	// useEffect((goToProjectSection), [props])

	return (
		<div className={classes.projectsSection}>
			<h2>Here's some of my work</h2>
			<div className={classes.cards}>
				{projects.map((el) => {
					return (
						<Project
							title={el.title}
							image={el.image}
							description={el.description}
							key={el.title}
							link={el.link}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectsPage;
