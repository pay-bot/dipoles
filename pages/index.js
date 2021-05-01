
import Hero from "../components/Hero"
import LayananSection from "../components/LayananSection"
import PaketSection from "../components/PaketSection"
import ReasonSection from "../components/ReasonSection"
import ProsesSection from "../components/ProsesSection"
import KontakSection from "../components/KontakSection"
import FooterSection from "../components/FooterSection"

import { withRouter } from 'next/router';


function Home() {
  return (
    <>

      <Hero />
      <ReasonSection />

      <PaketSection />
      <LayananSection />
      <ProsesSection />
      <KontakSection />
      <FooterSection />

    </>
  )
}

export default Home;
