import Navbar from "../components/Navbar"
import PricingCard from "../components/PricingCard"

export default function Pricing() {

  return (
    <>
      <Navbar />
      <div className="md:w-11/12 w-9/12 mx-auto mt-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          <div className="h-full border shadow-xl rounded-xl">
            <PricingCard
              variant="white"
              jenis="granit"
              hrg1="Rp.25-000-"
              hrg2="Rp.40.000"
              meter="/meter persegi"
              manpower="Man Power"
              restoring="Restoring"
              grinding="Grinding"
              kristalisasi="Crystallization"
              coating="Coating"
              finishing="Finishing"
            />
          </div>
        </div>
      </div>
    </>
  )
}