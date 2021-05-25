export default function ReasonItem({ image, deskripsi, detail }) {
  return (

    <div className="flex flex-col">
      <div className="mx-auto border shadow-xl rounded-full bg-gradient-to-r from-indigo-600 via-indigo-300 to-gray-800 ">
        <div className="border rounded-full bg-white items-center m-1">
          <img src={image} alt="" className="rounded-full w-20 mx-auto p-1" />
        </div>

      </div>
      <div className=" ">
        <h3 className="text-gray-700 lg:text-2xl text-lg text-center font-semibold ">{deskripsi}</h3>
        <p className="lg:text-md text-center text-sm mt-2 text-gray-700 mb-1">{detail}</p>
      </div>
    </div>
  )
}