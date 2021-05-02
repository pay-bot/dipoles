import Navitems from "./Navitems"
import Button from "./Button"
import classnames from "classnames";


export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6"
  }

  const pickedDir = dirs[dir];

  return (
    <>
      <div className="lg:flex md:block items-center">
        <ul className={classnames("flex my-6 uppercase lg:mr-auto mr-0", pickedDir)}>
          <Navitems scheme={scheme} href="/">home</Navitems>
          <Navitems scheme={scheme} href="/Pricing">paket harga & layanan</Navitems>
          <Navitems scheme={scheme} href="/Pricing">tentang kami</Navitems>
        </ul >
        <Button />
      </div>

    </>



  )
}