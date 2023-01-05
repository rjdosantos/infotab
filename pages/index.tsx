import Header from "../src/components/header/index";
import Footer from "../src/components/Footer/index";
import Hero from "../src/components/HeroBanner/index";
import Services from "../src/components/OurServices/index";
import Cta from "../src/components/CtaComponent/index";
import OurHistory from "../src/components/OurHistory/index";

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Services />
        <Cta />
        <OurHistory />
        <Footer />
    </>
  )
}
