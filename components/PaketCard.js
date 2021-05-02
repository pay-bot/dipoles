
export default function PaketCard({ jenis, deskripsi, harga, image }) {


  return (
    <>
      <div className="mx-auto">
        <img src={image} className="shadow-xl mx-auto" />
        <div>
          <h3 className="text-center text-3xl font-semibold my-5 text-blue-600">{jenis}</h3>
          <p className="text-md text-center">{deskripsi}</p>
          <h3 className="text-center text-2xl font-semibold my-5 xl:border-0 lg:border-0 md:border-0 border-b-2 border-black p-1 ">{harga}</h3>


        </div>
      </div>
    </>
  );
}