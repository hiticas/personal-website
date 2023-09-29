import React from 'react'
import iconMapping from '../src/assets/icons/index';

const IconComponent = ({ icon }) => {
	let handleIconClick;

	switch (icon) {
		case 'BsGithub':
		handleIconClick = () => {
			window.open('https://github.com/hiticas', '_blank');
		};
		break;

		case 'BsLinkedin':
		handleIconClick = () => {
			window.open('https://www.linkedin.com/in/mihai-hitica%C8%99/', '_blank');
		};
		break;

		case 'SiFrontendmentor':
		handleIconClick = () => {
			window.open('https://www.frontendmentor.io/profile/hiticas', '_blank');
		};
		break;

		default:
		handleIconClick = () => {};
		break;
	}

	const Icon = iconMapping[icon]; 
	if (!Icon) {
		return null;
	}

	return (
		<div onClick={handleIconClick} className='icon text-white'>
			<Icon />
		</div>
	);
};

export default IconComponent