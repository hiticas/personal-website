import Header from '../components/Header'
import HelloBanner from '../components/HelloBanner'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import React, { useState, useEffect } from "react";

const Home = () => {
	const [scrollToContact, setScrollToContact] = useState(false);

	const handleScrollToContact = () => {
		setScrollToContact(true);
	};

	const myMethod = () => {
		setScrollToContact(false);
	};
	
	useEffect(() => {
		const handleScroll = () => {
			myMethod();
		};
		window.addEventListener("scroll", handleScroll);
	
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); 
	
	return (
        <>
			<div className="h-10 bg-blue-300 p-2 font-ubuntu">Development in Progress..</div>
            <div className="homepage font-ubuntu">
                <Header />
                <HelloBanner scrollHandler={handleScrollToContact}/>
                <Skills />
                <Projects scrollHandler={handleScrollToContact}/>
                <Contact scrollToContact={scrollToContact}/>
                <Footer />
            </div>
        </>
	)
}

export default Home