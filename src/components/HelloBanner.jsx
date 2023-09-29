const HelloBanner = ({ scrollHandler }) => {
	return (
		<div className='h-screen'>
			<h1>Hello banner</h1>
			<button onClick={scrollHandler}>Contact me</button>
		</div>
	)
}

export default HelloBanner