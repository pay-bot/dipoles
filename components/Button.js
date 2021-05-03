import Link from "next/link"
import classnames from "classnames";

export default function Button({ scheme }) {
  const schemes = {
    light: "text-white text-opacity-80 hover:text-opacity-100",
    dark: "text-black"
  }

  const pickedScheme = schemes[scheme];
  return (
    <Link href="/contact"><a className={classnames("uppercase text-md text-gray-500 font-semibold border border-2 border-green-400 py-1 px-6 rounded-full hover:bg-green-400", pickedScheme)}>hubungi kami</a></Link>
  )
}