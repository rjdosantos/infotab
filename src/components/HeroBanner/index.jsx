import { Alert } from "flowbite-react";
export default function HeroBanner() {
	return (
		<>
		<div className="bg-secondaryColor pt-20 pb-28">
			<main className="container mx-auto flex gap-28">
				<div className="textContent">
					<h1 className="text-quartenaryColor font-semibold font-Lexend text-[2.625rem] max-w-[25ch] leading-[53px]">Soluções em informática e segurança eletrônica.</h1>
					<p className="max-w-[45ch] font-fontMedium text-quartenaryColor font-Lexend text-xl mt-3 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cum tenetur totam</p>
					<button type="submit" className="group relative flex gap-3 justify-center items-center rounded-2xl bg-primarycolor hover:bg-terciaryColor py-3 p-9 text-xl font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
					<img src="play-circle.svg" alt="" />	
							Saiba mais
					</button>
					<div className="flex gap-2 mt-10">
						<div><a href="#"><img src="youtube.svg" alt="facebook" /></a></div>
						<div><a href="#"><img src="instagram.svg" alt="facebook" /></a></div>
						<div><a href="#"><img src="facebook.svg" alt="facebook" /></a></div>
					</div>
				</div>	
				<div className="contentSlide text-black">
					<div id="default-carousel" className="relative" data-carousel="slide">
						{/* <!-- Carousel wrapper --> */}
						<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
								{/* <!-- Item 1 --> */}
								<div className="duration-700 ease-in-out" data-carousel-item>
										<span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
										<img src="slide1.svg" className="block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  alt="..." />
								</div>
								{/* <!-- Item 2 --> */}
								<div className="duration-700 ease-in-out" data-carousel-item>
										<img src="slide2.svg" className="block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
								</div>
								{/* <!-- Item 3 --> */}
								<div className="duration-700 ease-in-out" data-carousel-item>
										<img src="slide3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
								</div>
						</div>
						{/* <!-- Slider indicators --> */}
						<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
								<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
								<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
								<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
						</div>
						{/* <!-- Slider controls --> */}
								<button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
										<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
												<svg aria-hidden="false" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
												<span className="sr-only">Previous</span>
										</span>
								</button>
								<button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
										<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
												<svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
												<span className="sr-only">Next</span>
										</span>
								</button>
						</div>
				</div>
			</main>

		</div>

		</>
	)
}