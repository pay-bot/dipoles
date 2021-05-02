import PricingCard from "./PricingCard"

export default function PolesUlang() {
  return (
    <>
      <div className="lg:container w-11/12 mx-auto ">
        <h3 className="text-center text-xl font-semibold -mb-5 mt-3">Poles Ulang</h3>
        <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-8">
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
          <PricingCard
            variant="yellow"
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
        <div className="border border-2 rounded-full border-green-500 text-center py-2 my-3 flex mx-auto justify-center items-center hover:bg-green-500"><img src="/phone.svg" className="w-5 mx-2" />
      Pesan Sekarang
      </div>
        <div className="bg-gray-300 h-1 mx-auto mb-4"></div>
      </div>
    </>
  )
}