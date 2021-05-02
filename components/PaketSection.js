import PaketCard from "./PaketCard"

export default function PaketSection() {
  return (
    <section className="lg:container py-4 shadow-xl">
      <div className="mx-auto">
        <p className="text-3xl text-center uppercase font-semibold mb-5 text-gray-700 md:p-6 p-2  ">Paket Layanan Kami</p>

        <div className="mx-auto flex xl:flex-row lg:flex-row md:flex-row flex-col">


          <div className="p-2 md:w-4/12 w-full md:border-r  ">
            <PaketCard
              image="/poles-marmer-jakarta-selatan-small.png"
              jenis="JASA POLES MARMER"
              deskripsi="Lantai atau dinding marmer memerlukan perawatan khusus agar selalu nampak mengkilap dan menampakkan warna aslinya. Kami melayani poles lantai dan dinding marmer Anda agar senantiasa terjaga keindahannya. Proses poles marmer yaitu Restoring (perbaikan), Grinding (penghalusan), Crystallization (kristalisasi), Coating (pelapisan) dan Finishing (detailing). Kami juga memiliki manpower/tenaga ahli professional yang telah berpengalaman lebih dari 25 tahun dalam bidang poles marmer."
              harga="Harga Mulai dari"
            />
          </div>
          <div className="p-2 md:w-4/12 w-full md:space-y-3border-r">
            <PaketCard
              image="/poles-marmer-jakarta-selatan-small.png"
              jenis="JASA POLES GRANIT"
              deskripsi="Sama halnya dengan marmer, lantai dan dinding granit juga memerlukan perawatan khusus agar selalu nampak indah dan berkilau. Namun perbedaanya dengan marmer adalah tekstur granit yang cenderung lebih keras dibandingkan dengan marmer sehingga dibutuhkan proses Grinding yang lebih lama daripada marmer. Kami berkomitmen untuk memberikan pelayanan terbaik untuk granit Anda. Karena poles granit harus dilakukan secara berhati-hati dan tentunya harus dengan tenaga ahli professional."
              harga="Harga Mulai dari"
            />
          </div>
          <div className="p-2 md:w-4/12 w-full">
            <PaketCard
              image="/poles-marmer-jakarta-selatan-small.png"
              jenis="JASA POLES TERASO"
              deskripsi="Teraso adalah material komposit yang sering digunakan pada lantai dan berbeda dengan marmer ataupun granit yang merupakan batu alam asli, material teraso sendiri terdiri dari campuran semen, serpihan marmer, kuarsa, granit, kaca, atau bahan lain yang sesuai dengan selera pengguna. Ada dua jenis teraso yang biasanya dijual di pasaran, yaitu teraso yang permukaannya kasar dan yang permukaannya halus. Kami juga melayani poles teraso untuk menjaga keindahan lantai teraso Anda, dan tentunya dengan harga termurah."
              harga="Harga Mulai dari"
            />
          </div>
        </div>
        <div className="hidden xl-block lg:block md:block border-black border-2 bg-black h-1 w-8/12 mx-auto mt-4 mb-4">

        </div>

      </div>
    </section >
  )
}