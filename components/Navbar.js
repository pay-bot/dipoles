
import Nav from "./Nav"
import { useState } from "react";
import Link from "next/link"
import classnames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (

    <div className="w-full bg-white px-10 border-b shadow-lg">
      <div className="flex">
        <div className="w-3/12 lg:ml-10 ml-0 z-30 my-5 text-black uppercase text-3xl font-semibold tracking-widest items-center"><Link href="/"><a>
          di<span className="text-blue-500">poles</span></a></Link>
        </div>
        <div className="w-9/12 xl:ml-28 md:ml-20 lg:ml-20 mr-10 lg:block hidden">

          <Nav dir="horizontal" scheme="dark" />
        </div>
        <div className="w-9/12 lg:hidden text-right">
          <img src="/menu.svg" className="cursor-pointer inline-block mt-6 right-8 w-8" onClick={() => setOffcanvas(true)} />
        </div>
        <div className={classnames("fixed bg-white top-0 h-full w-full p-10 md:block transition-all", offcanvas ? "right-0" : "-right-full")}>
          <img src="/X.svg" className="cursor-pointer absolute top-6 right-8 w-8" onClick={() => setOffcanvas(false)} />
          <Nav
            scheme="dark"
            dir="vertical"
          />
        </div>

      </div>
    </div>


  )
}