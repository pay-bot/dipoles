import Link from "next/link"
import classnames from "classnames";

export default function Navitems({ href, scheme, children }) {
  const schemes = {
    light: "text-white text-opacity-80 hover:text-opacity-100",
    dark: "text-gray-600 hover:text-gray-900"
  }

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <Link href={href}><a

        className={classnames("text-md transition font-semibold text-white", pickedScheme)}
      >
        {children}
      </a></Link>
    </li>
  );
}