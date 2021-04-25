import FooterNav from "./FooterNav";

export default function FooterSection() {
  return (
    <>
      <div className="h-[100px] bg-gradient-to-t from-blue-300 to-blue-500 ">
        <div className="container mx-auto">
          <div className="mx-auto w-10/12 border-b border-black border-1">
            <FooterNav />
          </div>
          <div className="mx-auto w-10/12">
            <p className="text-gray-700"> Copyright 2021 © Edi Poles - Jasa Poles Marmer Granit & Teraso
        </p>
          </div>

        </div>
      </div>
    </>
  )
}