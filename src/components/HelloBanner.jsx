import circles_black from '../assets/images/circles-black.jpg';
import photo from '../assets/images/photo.jpg';

const HelloBanner = ({ scrollHandler }) => {
	return (
		<div className='banner h-[540px]'>
			<img className="top-[150px] absolute top-[100px] rotate-180" src={circles_black} />
			<div className='absolute flex justify-between items-center h-[470px] w-full max-w-[1400px] px-[100px]'>
				<div className='mt-[40px]'>
					<div className="text-white text-7xl">Nice to meet you!</div>
					<div className="text-white text-6xl">I'm <span className='border-b-4 border-blue-700'>Mihai Hiticaș</span></div>
					<div className="text-slate-300 text-2xl mt-6">Based in Timișoara, Romania. <br />Pasionate about front-end development.</div>
					<button className='mt-[55px] text-xl text-white border-b-2 border-blue-700 hover:border-blue-400 pb-2' onClick={scrollHandler}>CONTACT ME</button>
				</div>
				<div className='image w-[350px] mt-[25px]'>
					<img className="" src={photo} />
				</div>
			</div>
		</div>
	)
}

export default HelloBanner