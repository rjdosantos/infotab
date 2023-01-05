function OurServices() {
  return (
    <>
      <div className="bg-primarycolor text-white py-20">
        <div className="container mx-auto"> 
          <h2 className="font-Lexend font-semibold text-5xl text-center mb-3">Nossos Serviços</h2>
          <p className="font-Lexend font-light text-xl text-center mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestiae!</p>
          <div className="flex justify-center gap-8">
            <div className="bg-terciaryColor p-5 rounded-lg min-w-[280px]">
              <img src="Robot.svg" alt="Robot" />
              <h3 className="py-5 font-Lexend font-medium text-2xl">Automação</h3>
              <ul>
                <li className="flex items-center gap-1 font-Lexend font-light text-base"><img src="Check.svg" alt="Check" />Integração Alexa</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Casa conectada</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Portão eletrônico</li>
              </ul>
            </div>
            <div className="bg-terciaryColor p-5 rounded-lg min-w-[280px]">
              <img src="Wifi.svg" alt="Wifi" />
              <h3 className="py-5 font-Lexend font-medium text-2xl">Informática</h3>
              <ul>
                <li className="flex items-center gap-1 font-Lexend font-light text-base"><img src="Check.svg" alt="Check" />Manutenção</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Montagem</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Venda de periféricos</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Rede</li>
              </ul>
            </div>
            <div className="bg-terciaryColor p-5 rounded-lg min-w-[280px]">
              <img src="Camera.svg" alt="Camera" />
              <h3 className="py-5 font-Lexend font-medium text-2xl">Segurança eletrônica</h3>
              <ul>
                <li className="flex items-center gap-1 font-Lexend font-light text-base"><img src="Check.svg" alt="Check" />câmeras (venda e locação)</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Alarmes (venda e locação)</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Controle de acesso</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Interfone</li>
              </ul>
            </div>
            <div className="bg-terciaryColor p-5 rounded-lg min-w-[280px]">
              <img src="PcDisplay.svg" alt="PcDisplay" />
              <h3 className="py-5 font-Lexend font-medium text-2xl">Segurança colaborativa</h3>
              <ul>
                <li className="flex items-center gap-1 font-Lexend font-light text-base"><img src="Check.svg" alt="Check" />Residência</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Comércio</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Industrial</li>
                <li className="flex items-center gap-1 font-light text-base"><img src="Check.svg" alt="Check" />Condomínio</li>
              </ul>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default OurServices;