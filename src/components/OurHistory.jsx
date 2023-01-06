function OurHistory() {
  return (
    <>
      <div className="bg-primarycolor py-5 sm:py-7 md:py-8 lg:py-10 text-white">
        <div className="container mx-auto p-4">
          <h2 className="mb-16 font-Lexend font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Nossa história</h2>
          <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
             <div className="contentImg">
              <img src="img2.jpg" alt="img" className="rounded-lg" />
             </div>
             <div className="contentText mr-5">
                <h3 className="mb-5 font-Lexend font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl">Sobre a InfoTab</h3>
                <div className="text-sm sm:text-base">
                  <p className="estilo-paragrafo max-w-prose mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est sapien. Quisque consectetur urna at velit semper tristique.</p>
                  <p className= "max-w-prose mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est sapien. Quisque consectetur urna at velit semper tristique.</p>
                  <p className= "max-w-prose mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est sapien. Quisque consectetur urna at velit semper tristique.</p>
                  <p className= "max-w-prose mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est sapien. Quisque consectetur urna at velit semper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est sapien. Quisque consectetur urna at velit semper tristique.</p>
                </div>
             </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default OurHistory;