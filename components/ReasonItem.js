export default function ReasonItem({ image, deskripsi, detail }) {
  return (

    <div className="flex flex-col border shadow-xl rounded-lg mx-5 mb-4">
      <div className="mx-auto my-1 border shadow-xl rounded-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-600 ">
        <div className="border rounded-full bg-white items-center m-1 p-1">
          <img src={image} alt="" className="rounded-full mx-auto " />
        </div>

      </div>
      <div className="ml-4 ">
        <h3 className="text-gray-700 lg:text-2xl text-lg font-semibold ">{deskripsi}</h3>
        <p className="lg:text-md text-sm mt-2 text-gray-700 mb-1">{detail}</p>
      </div>
    </div>
  )
}