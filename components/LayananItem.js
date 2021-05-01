export default function LayananItem({ tipe, ulang, awal }) {
  return (
    <div className="bg-gray-800 h-60 py-auto ">
      <h3 className="text-white text-center text-2xl font-semibold my-10 -mb-6">{tipe}</h3>
      <ul className="text-white text-left list-disc m-16">
        <li>{ulang}</li>
        <li>{awal}</li>
      </ul>
    </div>
  )
}