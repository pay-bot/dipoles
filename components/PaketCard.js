
export default function PaketCard({ jenis, deskripsi, harga, image }) {


  return (
    <>

      <img src={image} className="shadow-xl w-full" />
      <div>
        <h3 className="text-center text-3xl font-semibold my-5">{jenis}</h3>
        <p className="text-md text-center">{deskripsi}</p>
        <h3 className="text-center text-2xl font-semibold my-5 ">{harga}</h3>

      </div>
    </>
  );
}