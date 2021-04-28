import ReasonItem from "./ReasonItem";


export default function ReasonSection() {
  return (
    <>

      <div className='w-11/12 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 p-5 mx-auto justify-center border -mt-28 bg-white rounded-lg shadow-xl'>

        <ReasonItem
          image="/HARGA-TERJANGKAU.png"
          deskripsi="Harga Terjangkau"
          detail="Harga dan biaya jasa Kami sangat terjangkau tanpa mengurangi kualitas pekerjaan yang kami miliki dan dapat di nego."

        />



        <ReasonItem
          image="TENAGA-AHLI-PROFESSIONAL.png"
          deskripsi="Tenaga Professional"
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
          detail="Survey dan konsultasi tidak dikenakan biaya, kami juga menerima demo pengerjaan jika diperlukan."

        />


      </div>


    </>
  )
}