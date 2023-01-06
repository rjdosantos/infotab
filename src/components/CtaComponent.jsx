function CtaComponent() {
  return (
    <>
    <div className="bg-secondaryColor py-20">
      <div className="flex justify-between container mx-auto">
        <div className="contentText">
          <h4 className="font-Lexend text-6xl font-semibold max-w-[15ch] text-quartenaryColor	">Monitore o seu bem onde estiver</h4>
          <p className="estilo-paragrafo mt-4 mb-6 max-w-[55ch]">Com o sistema de segurança eletrônica é possível ter controle do seu bem na palma da sua mão. Usando o seu smartphone você pode acessar os dispositivos de segurança de onde estiver</p>
          <button className="btn-principal">Entre em contato</button>
        </div>
        <div className="contentImg">
          <img srcSet="img1.jpg" alt="" />
        </div>
      </div>
    </div>

    </>
  )
}
export default CtaComponent;