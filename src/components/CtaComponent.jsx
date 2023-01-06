function CtaComponent() {
  return (
    <>
    <div className="bg-secondaryColor py-5 sm:py-6 md:py-8 lg:py-20">
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-10 justify-between items-center container mx-auto p-4 text-center md:text-left">
        <div className="sm:max-w-[60ch] md:max-w-[45ch] lg:max-w-[55ch]">
          <h4 className="font-Lexend text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold  text-quartenaryColor	">Monitore o seu bem onde estiver</h4>
          <p className="estilo-paragrafo text-sm mt-4 mb-6 mx-auto">Com o sistema de segurança eletrônica é possível ter controle do seu bem na palma da sua mão. Usando o seu smartphone você pode acessar os dispositivos de segurança de onde estiver</p>
          <button className="btn-principal mb-8 py-2 px-4 sm:py-3 sm:px-8">Entre em contato</button>
        </div>
        <div className="contentImg mx-auto">
          <img srcSet="img1.jpg" alt="" />
        </div>
      </div>
    </div>

    </>
  )
}
export default CtaComponent;