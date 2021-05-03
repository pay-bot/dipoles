export default function ProsesSection() {
  return (
    <div className=" lg:container mx-auto mt-10">
      <div className="xl:w-4/12 md:w-7/12 mx-auto">
        <h3 className="font-semibold text-center text-black text-2xl mb-4">
          Proses Poles Marmer, Granit, & Teraso
          Step By Step
        </h3>
      </div>
      <div className="w-11/12 mx-auto">
        <p className="mb-3">1.<span className="font-semibold">Restoring</span>(Proses restorasi atau perbaikan. seperti tambal lubang ataupun isi nat, dsb).</p>
        <p className="mb-3">2.<span className="font-semibold">Grinding</span>(Proses penghalusan permukaan atau pengupasan dan perataan permukaan lantai/dinding dengan 7 tahap grinding untuk marmer dan 9-11 tahap untuk granit).</p>
        <p className="mb-3">3.<span className="font-semibold">Crystallization</span>Crystallization (Proses kristalisasi atau pengkilapan lantai/dinding dengan chemical khusus yang merupakan salah satu proses yang paling penting dalam proses poles lantai maupun dinding).</p>
        <p className="mb-3">4.<span className="font-semibold">Coating</span>Coating (Proses pelapisan akhir setelah kristalisasi, fungsinya agar marmer/granit atau hasil polesan dapat lebih kuat dan bertahan lama serta membuat marmer/granit menjadi lebih awet karna terlapisi dengan chemical coating).</p>
        <p className="mb-3">5.<span className="font-semibold">Finishing </span> (Proses detailing atau penyempurnaan keseluruhan pengerjaan)</p>
      </div>
      <div className=" w-11/12 mx-auto flex md:flex-row flex-col mt-10">

        <div className="xl:w-4/12 md:w-full md:mr-2 mr:0">
          <p className="text-black text-center text-2xl mb-5">Proses Poles Marmer</p>
          <div className="embed-responsive aspect-ratio-4/3">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/0QixNCQ49u0"></iframe>
          </div>
        </div>
        <div className="xl:w-4/12 md:w-full md:mr-2 mr:0">
          <p className="text-black text-center text-2xl mb-5">Proses Poles Marmer</p>
          <div className="embed-responsive aspect-ratio-4/3">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/UHYRBRrCNk0"></iframe>
          </div>
        </div>
        <div className="xl:w-4/12 md:w-full">
          <p className="text-black text-center text-2xl mb-5">Proses Poles Marmer</p>
          <div className="embed-responsive aspect-ratio-4/3">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/rh4noj-oVdA&t=1s"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}