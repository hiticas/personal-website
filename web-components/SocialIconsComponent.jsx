import React from 'react'
import IconComponent from '../web-components/IconComponent'

const SocialIconsComponent = () => {
	return (
		<div className='flex'>
			<IconComponent icon="BsGithub" />
			<IconComponent icon="BsLinkedin" />
			<IconComponent icon="SiFrontendmentor" />
		</div>
	)
}

export default SocialIconsComponent