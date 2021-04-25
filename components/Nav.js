import Navitems from "./Navitems"
import Dropdown from "./Dropdown"
import Button from "./Button"


export default function Nav() {
  return (
    <>

      <ul className="items-center text-white space-x-10 justify-center lg:flex hidden" >
        <Dropdown />

        <Navitems>Home</Navitems>
        <Navitems>About</Navitems>
        <Navitems>Portofolio</Navitems>
        <Navitems> <Button /></Navitems>

      </ul >
    </>

  )
}