import FooterSection from "../components/FooterSection";
import Map from "../components/Map";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row flex-col w-10/12 my-10 mx-auto">
        <div className="lg:w-6/12 w-11/12 mx-auto">
          <Map />
        </div>
        <div className="lg:w-6/12 w-full flex flex-col h-full mx-auto pl-10">
          <h3 className="text-gray-800 uppercase text-center mb-10 text-2xl font-semibold">hubungi kami</h3>

          <div className="flex text-black text-md font-semibold"><img src="location.svg" className="w-6 mx-2" />Alamat</div>
          <p className="ml-10 mb-7">Jl. Margonda Raya</p>
          <div className="flex text-black text-md font-semibold"><img src="phoneout.svg" className="w-6 mx-2" />Phone</div>
          <p className="ml-10 mb-7">085284367858</p>
          <div className="flex text-black text-md font-semibold"><img src="mail.svg" className="w-6 mx-2" />Mail</div>
          <p className="ml-10 mb-7">heldih19@yahoo.com</p>
        </div>
      </div>
      <FooterSection />
    </>
  )
}