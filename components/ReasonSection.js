import ReasonItem from "./ReasonItem";


export default function ReasonSection() {
  return (
    <>
      <div className="w-full lg:pb-12 md:pb-12 h-full bg-gray-600 mt-4">
        <div className="w-11/12 flex md:flex-row flex-col mx-auto justify-center">
          <div className="xl:w-6/12 md:w-full mt-10 xl:mr-4 ">
            <img src="/Reason.jpg" className="h-full md:w-full " />
          </div>
          <div className="xl:w-6/12 md:w-full mt-10 ml-4">
            <p className="text-white text-3xl font-semibold mb-8">Kenapa DIPOLES?</p>
            <div className="flex flex-col">
              <div className="flex">
                <ReasonItem
                  image="/HARGA-TERJANGKAU.png"
                  deskripsi="Harga Terjangkau"
                  detail="Harga dan biaya jasa Kami sangat terjangkau tanpa mengurangi kualitas pekerjaan yang kami miliki dan dapat di nego."

                />
              </div>
              <div className="flex">
                <ReasonItem
                  image="TENAGA-AHLI-PROFESSIONAL.png"
                  deskripsi="Tenaga Ahli Professional dan Berpengalaman"
                  detail="Kami didukung oleh teknisi-teknisi dan tenaga ahli yang memiliki pengalaman lebih dari 25 tahun dan sangat professional di bidangnya.
                  "

                />
              </div>
              <div className="flex">
                <ReasonItem
                  image="/MESIN-MODERN.png"
                  deskripsi="Peralatan Modern"
                  detail="Mesin dan peralatan yang kami miliki juga modern dan terkini demi memberikan hasil pekerjaan yang maksimal dan memuaskan."

                />
              </div>
              <div className="flex">
                <ReasonItem
                  image="/SURVEY-DEMO-GRATIS.png"
                  deskripsi="Gratis Survey"
                  detail="Penawaran harga diberikan setelah survey selesai dilakukan (jika dibutuhkan survey) di rumah ataupun kantor anda. Survey dan konsultasi tidak dikenakan biaya, kami juga menerima demo pengerjaan jika diperlukan."

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}