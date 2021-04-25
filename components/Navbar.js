import Button from "./Button"
import Nav from "./Nav"

export default function Navbar() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-3/12 ml-4 my-5 text-white uppercase text-3xl font-semibold tracking-widest items-center">
            di<span className="text-blue-500">poles</span>
          </div>
          <div className="w-6/12 my-5 ">
            <Nav />
          </div>


        </div>
      </div>

    </div>
  )
}