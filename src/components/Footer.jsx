import React from 'react'
import SocialIconsComponent from '../../web-components/SocialIconsComponent'

const Footer = () => {
	return (
		<div className='footer flex place-content-between items-center content-center px-[100px] pt-[50px] pb-[100px] h-20'>
			<h1 className='text-white text-xl'>Inspired by <a href="https://www.frontendmentor.io" target="_blank" className='border-b-2 border-blue-700 hover:border-blue-400'>Front End Mentor</a></h1>
			<SocialIconsComponent />
		</div>
	)
}

export default Footer