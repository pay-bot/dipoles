import Navitems from "./Navitems"

import classnames from "classnames";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6"
  }

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("flex my-5 uppercase", pickedDir)}>


      <Navitems scheme={scheme} href="/">home</Navitems>
      <Navitems scheme={scheme} href="/Pricing">harga</Navitems>


    </ul >



  )
}