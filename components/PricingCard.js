import classnames from "classnames";


export default function PricingCard({ className, variant, jenis, hrg1, hrg2, meter, manpower, restoring, grinding, kristalisasi, coating, finishing }) {

  const variants = {

    "yellow": "bg-yellow-500",
    "black": "bg-black",
    "white": "bg-white"
  };

  const pickedVariant = variants[variant];


  return (
    <>
      <div className={classnames("flex flex-col items-center overflow-hidden", pickedVariant,
        className
      )}>
        <h5 className="text-xl w-full uppercase text-gray-700 text-center font-semibold border-b border-gray-300 mb-7">
          {jenis}
        </h5>
        <h5 className="text-2xl uppercase text-gray-700 text-center font-semibold mb-2">
          {hrg1}
        </h5>
        <h5 className="text-2xl uppercase text-gray-700 text-center font-semibold mb-0">
          {hrg2}
        </h5>
        <h5 className="mb-3">
          {meter}
        </h5>
        <div className="border-b w-8/12 justify-center border-gray-300 mb-3 flex"> <img className=""
          src="ceklis.svg" />
          {manpower}
        </div>
        <div className="border-b w-8/12 justify-center mb-3 flex"> <img className=""
          src="ceklis.svg" />
          {restoring}
        </div>
        <div className="border-b w-8/12 justify-center mb-3 flex"> <img className=""
          src="ceklis.svg" />
          {grinding}
        </div>
        <div className="border-b w-8/12 justify-center mb-3 flex"> <img className=""
          src="ceklis.svg" />
          {kristalisasi}
        </div>
        <div className="border-b w-8/12 justify-center mb-3 flex"> <img className=""
          src="ceklis.svg" />
          {coating}
        </div>
        <div className="border-b w-8/12 justify-center mb-3 flex"> <img className=""
          src="ceklis.svg" />
          {finishing}
        </div>


      </div>
    </>
  )
}