import circles_black from '../assets/images/countries-project.jpg';
const Projects = ({ scrollHandler }) => {
	return (
		<div className='projects px-[100px] mb-[100px]'>
			<div className="flex justify-between items-center">
				<div className='text-white text-6xl font-bold'>Projects</div>
				<button onClick={scrollHandler} className="text-xl text-white border-b-2 border-blue-700 hover:border-blue-400 pb-2">CONTACT ME</button>
			</div>
			<div className='flex justify-between my-[100px]'>
				<div className=''>
					<img className="w-[350px] h-[230px] mb-4" src={circles_black} />
					<div className="text-white text-xl font-bold mb-2">COUNTRY REACT APP</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={circles_black} />
					<div className="text-white text-xl font-bold mb-2">COUNTRY REACT APP</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={circles_black} />
					<div className="text-white text-xl font-bold mb-2">COUNTRY REACT APP</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
			</div>
			<div className='flex justify-between'>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={circles_black} />
					<div className="text-white text-xl font-bold mb-2">COUNTRY REACT APP</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={circles_black} />
					<div className="text-white text-xl font-bold mb-2">COUNTRY REACT APP</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={circles_black} />
					<div className="text-white text-xl font-bold mb-2">COUNTRY REACT APP</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
			</div>
		</div>
	)
}

export default Projects