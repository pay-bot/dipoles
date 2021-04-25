import Navbar from "./Navbar"

export default function Hero() {
  return (
    <div className="bg-hero h-[600px]">
      <Navbar />
      <div className="text-center xl:my-38 md:mt-72 md:mb-10 mt-24">
        <h1 className="xl:w-8/12 md:w-full mx-auto my-10 md:text-5xl text-2xl text-white font-semibold">Jasa Poles Marmer Professional Terbaik di Jabodetabek.</h1>
        <p className="text-white md:text-xl text-sm mx-auto xl:w-6/12 md:w-11/12 w-11/12 font-semibold">DIPOLES adalah badan usaha yang bergerak dibidang jasa poles marmer, granit, teraso, dan jenis batu alam lainnya. Cakupan layanan Kami meliputi seluruh wilayah di Indonesia.</p>

      </div>
      <div className="text-center">
        <button className="md:my-20 lg:my-24 my-16 uppercase bg-blue-500 px-4 py-2 text-3xl font-semibold tracking-wider text-white rounded hover:bg-blue-600">order now!</button>
        <h1 className="xl:text-5xl md:text-4xl text-xl text-white font-semibold text-center"><a href=""> Foor Your Better Floors And Walls</a></h1>
      </div>
    </div>
  )
}