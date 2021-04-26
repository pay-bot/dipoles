export default function ReasonItem({ image, deskripsi, detail }) {
  return (

    <div className="flex md:flex-row flex-col mb-4">
      <div className="mx-auto">
        <div className="border-2 rounded-full hover:bg-white border-white items-center md:p-1 p-2">
          <img src={image} alt="" className="rounded-full md:w-60 w-auto mx-auto " />
        </div>
      </div>

      <div className="ml-4">
        <h3 className="text-white lg:text-2xl text-lg font-semibold ">{deskripsi}</h3>
        <p className="lg:text-md text-sm mt-2 text-white">{detail}</p>
      </div>
    </div>
  )
}