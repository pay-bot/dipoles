import ReasonItem from "./ReasonItem";


export default function ReasonSection() {
  return (
    <>
      <div className="lg:pb-12 md:pb-12 h-full mt-4">

        <div className="flex mt-10 mx-auto justify-center">
          <p className="text-gray-700 text-3xl font-semibold mb-8 text-center">Kenapa DIPOLES?</p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 justify-center mx-8'>

          <ReasonItem
            image="/HARGA-TERJANGKAU.png"
            deskripsi="Harga Terjangkau"
            detail="Harga dan biaya jasa Kami sangat terjangkau tanpa mengurangi kualitas pekerjaan yang kami miliki dan dapat di nego."

          />



          <ReasonItem
            image="TENAGA-AHLI-PROFESSIONAL.png"
            deskripsi="Tenaga Ahli Professional dan Berpengalaman"
            detail="Kami didukung oleh teknisi-teknisi dan tenaga ahli yang memiliki pengalaman lebih dari 25 tahun dan sangat professional di bidangnya.
                  "

          />


          <ReasonItem
            image="/MESIN-MODERN.png"
            deskripsi="Peralatan Modern"
            detail="Mesin dan peralatan yang kami miliki juga modern dan terkini demi memberikan hasil pekerjaan yang maksimal dan memuaskan."

          />


          <ReasonItem
            image="/SURVEY-DEMO-GRATIS.png"
            deskripsi="Gratis Survey"
            detail="Penawaran harga diberikan setelah survey selesai dilakukan (jika dibutuhkan survey) di rumah ataupun kantor anda. Survey dan konsultasi tidak dikenakan biaya, kami juga menerima demo pengerjaan jika diperlukan."

          />


        </div>
      </div>

    </>
  )
}