import Link from "next/link"
import classnames from "classnames";

export default function Navitems({ href, scheme, children }) {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100",
    dark: "text-black"
  }

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <Link href={href}><a

        className={classnames("text-lg transition font-semibold", pickedScheme)}
      >
        {children}
      </a></Link>
    </li>
  );
}