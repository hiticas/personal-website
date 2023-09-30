import countries_project from '../assets/images/countries-project.jpg';
import rock_project from '../assets/images/rock-project.jpg';
import interactive_cards_project from '../assets/images/interactive-cards-project.jpg';
import job_listing_project from '../assets/images/job-listing-project.jpg';
import project1 from '../assets/images/project1.png';
import multi_step_project from '../assets/images/multi-step-project.jpg';

const Projects = ({ scrollHandler }) => {
	return (
		<div className='projects px-[100px] mb-[100px]'>
			<div className="flex justify-between items-center">
				<div className='text-white text-7xl'>Projects</div>
				<button onClick={scrollHandler} className="text-xl text-white border-b-2 border-blue-700 hover:border-blue-400 pb-2">CONTACT ME</button>
			</div>
			<div className='flex justify-between my-[100px]'>
				<div className=''>
					<img className="w-[350px] h-[230px] mb-4" src={countries_project} />
					<div className="text-white text-xl font-bold mb-2">COUNTRY REACT APP</div>
					<div className="text-slate-300 text-lg">REACT, HTML, CSS </div>
				</div>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={rock_project} />
					<div className="text-white text-xl font-bold mb-2">ROCK PATER SCISSORS</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={interactive_cards_project} />
					<div className="text-white text-xl font-bold mb-2">INTERACTIVE CARDS</div>
					<div className="text-slate-300 text-lg">REACT, CSS, HTML</div>
				</div>
			</div>
			<div className='flex justify-between'>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={job_listing_project} />
					<div className="text-white text-xl font-bold mb-2">JOB LISTING APP</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={project1} />
					<div className="text-white text-xl font-bold mb-2">SIMPLE PROJECT</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
				<div className=''>
					<img className="w-[350px] h-[230px]  mb-4" src={multi_step_project} />
					<div className="text-white text-xl font-bold mb-2">MULTI STEP FORM</div>
					<div className="text-slate-300 text-lg">CSS, HTML</div>
				</div>
			</div>
		</div>
	)
}

export default Projects