function OurServices() {
  return (
    <>
      <div className="bg-primarycolor text-white py-10">
        <div className="container mx-auto"> 
          <h2 className="font-Lexend font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3">Nossos Serviços</h2>
          <p className="estilo-paragrafo text-center mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestiae!</p>
          <div className="flex flex-col md:flex-row justify-center gap-8 p-4 flex-wrap">
            <div className="bg-terciaryColor p-5 rounded-lg min-w-[280px]">
              <img src="Robot.svg" alt="Robot" />
              <h3 className="py-5 font-Lexend font-medium text-xl sm:text-2xl md:text-3xl">Automação</h3>
              <ul className="text-sm sm:text-base font-light font-Lexend">
                <li className="flex items-center gap-1 font-Lexend"><img src="Check.svg" alt="Check" />Integração Alexa</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Casa conectada</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Portão eletrônico</li>
              </ul>
            </div>
            <div className="bg-terciaryColor p-5 rounded-lg min-w-[280px] flex-shrink-0">
              <img src="Wifi.svg" alt="Wifi" />
              <h3 className="py-5 font-Lexend font-medium text-xl sm:text-2xl md:text-3xl">Informática</h3>
              <ul className="text-sm sm:text-base font-light font-Lexend">
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Manutenção</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Montagem</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Venda de periféricos</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Rede</li>
              </ul>
            </div>
            <div className="bg-terciaryColor p-5 rounded-lg min-w-[280px]">
              <img src="Camera.svg" alt="Camera" />
              <h3 className="py-5 font-Lexend font-medium text-xl sm:text-2xl md:text-3xl md:max-w-[12ch]">Segurança eletrônica</h3>
              <ul className="text-sm sm:text-base font-light font-Lexend">
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />câmeras (venda e locação)</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Alarmes (venda e locação)</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Controle de acesso</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Interfone</li>
              </ul>
            </div>
            <div className="bg-terciaryColor p-5 rounded-lg min-w-[280px]">
              <img src="PcDisplay.svg" alt="PcDisplay" />
              <h3 className="py-5 font-Lexend font-medium text-xl sm:text-2xl md:text-3xl md:max-w-[12ch]">Segurança colaborativa</h3>
              <ul className="text-sm sm:text-base font-light font-Lexend">
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Residência</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Comércio</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Industrial</li>
                <li className="flex items-center gap-1"><img src="Check.svg" alt="Check" />Condomínio</li>
              </ul>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default OurServices;