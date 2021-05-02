import Navbar from "./Navbar"

export default function Hero() {
  return (
    <div className="bg-hero h-[650px]">
      <Navbar />
      <div className="text-center md:mt-32 lg:mb-5 md:mb-10 mt-36">
        <h1 className="xl:w-7/12 lg:w-8/12 md:w-9/12 w-11/12 mx-auto my-10 lg:text-5xl md:text-4xl text-2xl text-white font-semibold">Jasa Poles Marmer Professional Terbaik di Jabodetabek.</h1>
        <p className="text-white md:text-xl text-sm mx-auto xl:w-6/12 lg:w-8/12 md:w-11/12 w-11/12 font-semibold">DIPOLES adalah badan usaha yang bergerak dibidang jasa poles marmer, granit, teraso, dan jenis batu alam lainnya. Cakupan layanan Kami meliputi seluruh wilayah di Indonesia.</p>

      </div>
      <div className="text-center">
        <button className="md:mt-2 lg:mb-16 my-14 uppercase bg-blue-500 px-4 py-2 xl:text-3xl text-xl font-semibold tracking-wider text-white rounded hover:bg-blue-600">order now!</button>
      </div>
    </div>
  )
}