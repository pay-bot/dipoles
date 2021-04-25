import ReasonItem from "./ReasonItem";


export default function ReasonSection() {
  return (
    <>
      <div className="w-full h-full bg-gray-600 mt-4">
        <div className="container w-11/12 flex md:flex-row flex-col mx-auto justify-center">
          <div className="xl:w-6/12 md:w-full mt-10 xl:mr-4 ">
            <img src="/Reason.jpg" className="h-full md:w-full " />
          </div>
          <div className="xl:w-6/12 md:w-full mt-10 ml-4">
            <p className="text-white text-3xl font-semibold mb-8">Kenapa DIPOLES?</p>
            <div className="flex flex-col">
              <div className="flex">
                <ReasonItem
                  image="/HARGA-TERJANGKAU.png"
                  deskripsi="Harga Terjangkau"
                  detail="Harga dan biaya jasa Kami sangat terjangkau tanpa mengurangi kualitas pekerjaan yang kami miliki dan dapat di nego."

                />
              </div>
              <div className="flex">
                <ReasonItem
                  image="/HARGA-TERJANGKAU.png"
                  deskripsi="Harga Terjangkau"
                  detail="Harga dan biaya jasa Kami sangat terjangkau tanpa mengurangi kualitas pekerjaan yang kami miliki dan dapat di nego."

                />
              </div>
              <div className="flex">
                <ReasonItem
                  image="/HARGA-TERJANGKAU.png"
                  deskripsi="Harga Terjangkau"
                  detail="Harga dan biaya jasa Kami sangat terjangkau tanpa mengurangi kualitas pekerjaan yang kami miliki dan dapat di nego."

                />
              </div>
              <div className="flex">
                <ReasonItem
                  image="/HARGA-TERJANGKAU.png"
                  deskripsi="Harga Terjangkau"
                  detail="Harga dan biaya jasa Kami sangat terjangkau tanpa mengurangi kualitas pekerjaan yang kami miliki dan dapat di nego."

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}