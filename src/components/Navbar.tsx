import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <Link href="/">
        <span>My Blog</span>
      </Link>
      <div >
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog/list">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/">
            
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
