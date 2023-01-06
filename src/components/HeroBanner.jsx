import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React from "react";
export default function HeroBanner() {

	const slides = [
		{
			url: "produto1.png"
		},
		{
			url: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
		},
		{
			url: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
		},
		{
			url: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
		}
	]
	const [currentIndex, setCurrentIndex] = React.useState(0);

	function prevSlide() {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}

	function nextSlide() {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	return (
		<>
		<div className="bg-secondaryColor pt-20 pb-7">
			<main className="container w-full mx-auto flex items-center md:gap-7 lg:gap-10 flex-col md:flex-row px-4">
				<div className="textContent">
					<h1 className="text-quartenaryColor font-semibold font-Lexend text-2xl sm:text-2xl md:text-3xl lg:text-[2.625rem] md:text-left text-center lg:max-w-[25ch]">Soluções em informática e segurança eletrônica.</h1>
					<p className="estilo-paragrafo text-center md:text-left md:text-lg  text-quartenaryColor mt-3 mb-6 lg:max-w-[45ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cum tenetur totam</p>
					<button className="btn-principal px-3 md:px-4 py-1 md:py-2 block sm:w-auto text-center mb-10 md:mb-0 mx-auto md:mx-0">Saiba Mais
					</button>
					<div className="hidden md:flex gap-2 mt-10">
						<div><a href="#"><img src="youtube.svg" alt="facebook" /></a></div>
						<div><a href="#"><img src="instagram.svg" alt="facebook" /></a></div>
						<div><a href="#"><img src="facebook.svg" alt="facebook" /></a></div>
					</div>
				</div>	
				<div className="contentSlide relative group z-0">
					<div className="w-[320px] sm:w-[320px] md:w-[350px] lg:w-[550px] h-[200px] sm:h-[200px] lg:h-[450px md:h-[300px]  mx-auto p-2">
						<div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-lg bg-center bg-cover"></div>
					</div>
					{/* Left Arrow */}
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl cursor-pointer text-black p-2 font-semibold">
						<BsChevronCompactLeft size={32} onClick={prevSlide} />	
					</div>
					{/* Right Arrow */}
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl cursor-pointer text-black p-2 font-semibold">
						<BsChevronCompactRight size={32} onClick={nextSlide} />	
					</div>
				</div>
			</main>
		</div>
		</>
	)
}