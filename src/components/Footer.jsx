function Footer() {
  return (
    <>
    <footer className="bg-secondaryColor">
      <div className="grid gap-4 grid-cols-3 py-16">
        <div className="flex gap-1 items-center justify-end">
          <div><img srcSet="icon-location.svg" alt="" /></div>
          <span className="estilo-paragrafo text-quartenaryColor">Rua logo ali - <br />Rio do sul/SC</span>
        </div>
        <div className="flex gap-1 flex-col items-center justify-end">
          <div className="flex gap-1 pr-[30px] items-center">
            <div><img srcSet="icon-whatsapp.svg" alt="" /></div>
            <p className="estilo-paragrafo text-quartenaryColor">47 99600-0000</p>
          </div>
          <div className="flex gap-1 items-center">
            <div><img srcSet="icon-email.svg" alt="" /></div>
            <p className="estilo-paragrafo text-quartenaryColor">infotab@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div><a href="#"><img srcSet="youtube.svg" alt="facebook" /></a></div>
          <div><a href="#"><img srcSet="instagram.svg" alt="facebook" /></a></div>
          <div><a href="#"><img srcSet="facebook.svg" alt="facebook" /></a></div>
        </div>
      </div>
      <div className="bg-primarycolor text-white">
        <div className="container mx-auto flex justify-between font-Lexend font-light text-sm py-6">
          <p className="estilo-paragrafo">Todos os direitos reservados - 2023 InfoTab</p>
          <p className="estilo-paragrafo">Desenvolvido por <a href="#" className="font-light underline underline-offset-4">@Fernando</a></p> 
        </div>
      </div>
    
    </footer>
    </>
  ) 
}

export default Footer;