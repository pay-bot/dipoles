import LayananItem from "./LayananItem"

export default function LayananSection() {
  return (
    <>
      <div className="bg-layanan h-[500px] m-1 ">
        <div className="xl:w-6/12 md:w-10/12 w-11/12 h-full flex flex-col items-center justify-center h-full mx-auto mx-auto ">
          <h1 className="text-2xl md:text-5xl font-semibold text-center text-white uppercase mb-5">layanan kami</h1>
          <p className="text-sm md:text-xl text-white text-center">Kami melayani jasa poles ulang atau media poles yang sudah pernah di poles sebelumnya, dan jasa poles awal atau media poles yang belum pernah sama sekali di poles, serta pemasangan baru atau pemasangan lantai maupun dinding marmer/granit/teraso dari nol.</p>

        </div>
      </div>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-1 gap-1 ">
        <LayananItem
          tipe="jasa poles marmer"
          ulang="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
          awal="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
        />
        <LayananItem
          tipe="jasa poles marmer"
          ulang="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
          awal="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
        />
        <LayananItem
          tipe="jasa poles marmer"
          ulang="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
          awal="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
        />
        <LayananItem
          tipe="jasa poles marmer"
          ulang="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
          awal="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
        />
        <LayananItem
          tipe="jasa poles marmer"
          ulang="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
          awal="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
        />
        <LayananItem
          tipe="jasa poles marmer"
          ulang="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
          awal="Jasa Poles Ulang Marmer : Rp25.000 – Rp40.000 /meter"
        />
      </div>
      <div className="w-full bg-red-600 py-2 my-2 rounded-xl">
        <h3 className="font-semibold md:text-lg text-lg text-center text-white">
          Baca Syarat & Ketentuan Layanan Disini *(di bagian bawah halaman)

        </h3>

      </div>
      <div className="border-black border-2 bg-black h-1 w-8/12 mx-auto mb-4">

      </div>
      <div className="text-center text-black md:text-2xl text-lg font-semibold">
        “KEPUASAN ANDA, KEBAHAGIAAN KAMI”
      </div>
    </>
  )
}