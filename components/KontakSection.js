export default function KontakSection() {
  return (
    <section className="mx-auto lg:container my-10" id="KontakSection">
      <div className="mx-auto ">
        <div className="py-[50px] w-11/12 flex md:flex-row bg-gray-200 flex-col mx-auto">
          <div className="xl:w-6/12 md:w-full h-full ">
            <div className="w-8/12 flex flex-col h-full mx-auto">
              <h3 className="text-gray-800 uppercase text-center mb-10 text-2xl font-semibold">hubungi kami</h3>

              <div className="flex text-black text-md font-semibold"><img src="location.svg" className="w-6 mx-2" />Alamat</div>
              <p className="ml-10 mb-7">Jl. Margonda Raya</p>
              <div className="flex text-black text-md font-semibold"><img src="phoneout.svg" className="w-6 mx-2" />Phone</div>
              <p className="ml-10 mb-7">085284367858</p>
              <div className="flex text-black text-md font-semibold"><img src="mail.svg" className="w-6 mx-2" />Mail</div>
              <p className="ml-10 mb-7">heldih19@yahoo.com</p>
            </div>
          </div>
          <div className="xl:w-6/12 md:w-full h-full">
            <div className="w-8/12 flex flex-col h-full mx-auto">
              <h2 className="text-2xl text-black text-center uppercase font-semibold mb-10">booking online</h2>
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-black text-md font-semibold">Nama</label>
                  <input type="text" className="inline-block border border-gray-500 rounded w-full" placeholder="" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-black text-md font-semibold">Email</label>
                  <input type="text" className="border border-gray-500 rounded w-full" placeholder="" />
                </div>
              </div>
              <label htmlFor="" className="text-black text-md font-semibold">No.Telp</label>
              <input type="text" className="border border-gray-500 rounded w-full" placeholder="" />
              <label htmlFor="" className="text-black text-md font-semibold">Subject</label>
              <input type="text" className="border border-gray-500 rounded w-full" placeholder="" />
              <label htmlFor="" className="text-black text-md font-semibold">Pesan</label>
              <textarea name="" id="" cols="30" rows="10" className="border border-gray-500 h-[140px] rounded w-full mb-2"></textarea>
              <button className="bg-gray-900 text-white text-lg text-center py-1 px-4 rounded uppercase font-semibold w-4/12 ml-auto">send</button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}