import React from 'react'
import SocialIconsComponent from '../../web-components/SocialIconsComponent'

const Footer = () => {
	return (
		<div className='footer flex place-content-between items-center content-center px-[100px] pt-[50px] pb-[100px] h-20'>
			<h1 className='text-white font-bold text-xl'>mihai hiticaș</h1>
			<SocialIconsComponent />
		</div>
	)
}

export default Footer