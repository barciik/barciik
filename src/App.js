import React from 'react';
import { Fragment, useState } from 'react';
import WelcomeSection from './components/Welcome-page';
import ProjectsPage from './components/projects-page';
import Aboutme from './components/aboutme';

function App() {
  const [offset, setOffset] = useState(0)

  const changeOffset = (data) => {
    setOffset(data)
  }

	const scrollToProjects = () => {
    window.scroll({top: offset, behavior: 'smooth'})
  };

	return (
		<Fragment>
			<WelcomeSection onScroll={scrollToProjects} />
      <Aboutme changeOffset={changeOffset}/>
			<ProjectsPage />
		</Fragment>
	);
}

export default App;
