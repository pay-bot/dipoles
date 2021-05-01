import Button from "./Button"
import Nav from "./Nav"
import { useState } from "react";
import classnames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="flex">
          <div className="w-3/12 ml-4 my-5 text-white uppercase text-3xl font-semibold tracking-widest items-center">
            di<span className="text-blue-500">poles</span>
          </div>
          <div className="w-6/12 hidden md:block ">

            <Nav dir="horizontal" scheme="light" />
          </div>
          <div className="w-9/12 md:hidden text-right">
            <img src="/menu.svg" className="cursor-pointer inline-block mt-8 right-8 w-8" onClick={() => setOffcanvas(true)} />
          </div>
          <div className={classnames("fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all", offcanvas ? "right-0" : "-right-full")}>
            <img src="/X.svg" className="cursor-pointer absolute top-8 right-8 w-8" onClick={() => setOffcanvas(false)} />
            <Nav
              scheme="dark"
              dir="vertical"
            />
          </div>

        </div>
      </div>

    </div>
  )
}