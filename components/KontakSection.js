export default function KontakSection() {
  return (
    <div className="mx-auto w-full bg-gray-800 mt-10">
      <div className="container mx-auto ">
        <div className="py-[50px] w-11/12 flex md:flex-row flex-col mx-auto">
          <div className="xl:w-6/12 md:w-full bg-gray-600 h-[500px] ">
            <div className="w-5/12 flex flex-col items-center justify-center h-full mx-auto">
              <h3 className="text-white uppercase text-center mb-1 text-3xl font-semibold">hubungi kami</h3>
              <h4 className="text-white uppercase text-center mb-1 text-2xl font-semibold">Dipoles</h4>
              <p className="text-white text-center mb-1 text-lg font-semibold">Jl.Margonda Raya</p>
              <p className="text-white text-center mb-1 text-lg font-semibold">Gg.Kedondong</p>
              <p className="text-white text-center mb-1 text-lg font-semibold">Telp. 0898xxxx140</p>
              <p className="text-white text-center mb-1 text-lg font-semibold">email.
              cs@dipoles.com</p>
            </div>
          </div>
          <div className="xl:w-6/12 md:w-full bg-white h-[500px]">
            <div className="w-9/12 flex flex-col items-center justify-center h-full mx-auto">
              <h2 className="text-lg text-black text-center uppercase font-semibold">booking online</h2>
              <label htmlFor="" className="text-black text-md font-semibold">Nama</label>
              <input type="text" className="border border-gray-500 rounded w-full" placeholder="" />
              <label htmlFor="" className="text-black text-md font-semibold">Email</label>
              <input type="text" className="border border-gray-500 rounded w-full" placeholder="" />
              <label htmlFor="" className="text-black text-md font-semibold">No.Telp</label>
              <input type="text" className="border border-gray-500 rounded w-full" placeholder="" />
              <label htmlFor="" className="text-black text-md font-semibold">Subject</label>
              <input type="text" className="border border-gray-500 rounded w-full" placeholder="" />
              <label htmlFor="" className="text-black text-md font-semibold">Pesan</label>
              <textarea name="" id="" cols="30" rows="10" className="border border-gray-500 h-[140px] rounded w-full mb-2"></textarea>
              <button className="bg-red-700 text-white text-lg text-center py-1 px-4 rounded uppercase font-semibold">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}