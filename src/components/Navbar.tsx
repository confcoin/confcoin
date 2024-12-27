import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-[#111]">
      <div className="font-bold text-xl">CONFCOIN</div>
      <ul className="flex gap-4">
        <li>
          <a href="#hero" className="hover:underline">Home</a>
        </li>
        <li>
          <a href="#movement" className="hover:underline">Movement</a>
        </li>
        <li>
          <a href="#supply" className="hover:underline">Supply</a>
        </li>
        <li>
          <a href="#get-involved" className="hover:underline">Get Involved</a>
        </li>
        <li>
          <a href="#top" className="hover:underline">Top</a>
        </li>
      </ul>
    </nav>
  );
}
