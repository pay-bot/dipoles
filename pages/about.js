import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

export default function about() {
  return (
    <>
      <Navbar />
      <div className="w-10/12 mx-auto">
        <div className="mb-5">
          <p className="text-center text-lg font-semibold my-5">Tentang Kami</p>
          <p className="text-md my-5">DIPOLES adalah badan usaha yang bergerak dibidang jasa poles marmer, granit, teraso, beragam jenis batu alam dan media poles lainnya. Kami melayani jasa untuk pemasangan baru, poles awal dan poles ulang. Cakupan layanan Kami pada umumnya meliputi seluruh wilayah di Indonesia, dan khususnya wilayah Jabodetabek.</p>
          <p className="text-md my-5">Kami memiliki tenaga ahli (manpower) yang professional dan sudah sangat berpengalaman cukup lama dalam dunia poles, cleaning, dan pemasangan lantai maupun dinding. Hal ini yang sangatlah Kami perhatikan, karena profesionalitas tenaga ahli sangat berpengaruh besar terhadap hasil pengerjaan dan kepuasan klien Kami, terutama untuk marmer granit dan batuan alam lainnya yang memang memiliki nilai seni dan nilai jual yang tinggi.</p>
          <p className="text-md my-5">Pelayanan kami mencakup Perumahan, Perkantoran, Sekolah-sekolah, Mall bahkan Istana Kepresidenan pernah memakai jasa kami.</p>
          <p className="text-md my-5">Disamping itu keunggulan Kami adalah pada paket harga yang sangat terjangkau, karena semua layanan kami, baik pemasangan baru, pemolesan awal dan pemolesan ulang semuanya sudah termasuk dalam semua layanan poles (restoring + grinding + crystallization + coating & finishing).</p>
          <p className="text-md my-5">Adalah komitmen, harapan dan do’a Kami untuk menjadikan badan usaha ini secara berkelanjutan terus berkembang dan meningkat dari skala usaha kecil dan menengah menjadi perusahaan berskala besar dan menjadi Perusahaan Cleaning & Jasa Poles terbaik nomor satu di Indonesia.</p>
        </div>
        <div className="border-t-2 border-b-2 py-4  border-gray-300">
          <p className="text-center font-semibold text-lg">MOTTO</p>
          <p className="text-center text-md">Kepuasan Anda Kebahagiaan Kami</p>
        </div>
        <div className="flex lg:flex-row flex-col mb-20 mt-4">
          <div className="lg:w-6/12 w-full flex flex-col pr-4">
            <p className="uppercase my-5 text-lg font-semibold lg:pr-5 pr-0">visi</p>
            <p className="text-md">Menjadi perusahaan cleaning & jasa poles lantai/dinding terbesar dan terbaik nomor satu di skala Nasional yang memiliki komitmen yang tinggi dalam memenuhi kepuasan konsumen yang berlandaskan kepada layanan yang terbaik dan optimal dan selalu mengedepankan professionalitas kerja.</p>
          </div>
          <div className="lg:w-6/12 w-full flex lg:pl-8 pl-0 flex-col lg:border-l lg:border-0 border-gray-400">
            <p className="uppercase my-5 text-lg font-semibold">misi</p>
            <ul className="list-disc">
              <li className="mb-3">Memiliki kantor representatif di kota-kota besar di Indonesia.</li>
              <li className="mb-3">Mengembangkan dan selalu meningkatkan standar layanan secara konsisten dan berkesinambungan.</li>
              <li className="mb-3">Menjaga dan menjalin hubungan baik dengan konsumen maupun calon konsumen.</li>
              <li className="mb-3">Mengembangkan unit usaha dalam bidang cleaning pada ranah yang lebih luas.</li>
              <li className="mb-3">Selalu konsisten menjaga Professionalitas tenaga ahli.</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  )
}