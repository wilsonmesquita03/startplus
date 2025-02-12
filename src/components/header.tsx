import Link from "next/link"
import UserMenu from "./user-menu"
import Image from "next/image"

const Header = () => {
  return (
    <header className="w-full fixed overflow-x-hidden z-10 bg-[rgba(35,35,35,0.8)] md:bg-transparent">
      <div className="container w-full relative bg-[rgba(35,35,35,0.8)] backdrop-blur-[20px] py-4 md:px-10 md:my-2.5 grid grid-cols-2 md:grid-cols-5 items-center">
        {/* Logo */}
        <div className="col-span-1">
          <Link href="/">
            <Image
              className="object-contain max-w-full"
              src="/assets/default/img/home/logo.svg"
              alt="Logo Escola Start"
              width={150}
              height={50}
            />
          </Link>
        </div>

        {/* Navegação (Menu) */}
        <nav className="col-span-3 hidden md:block w-full text-white">
          <ul className="flex gap-6 justify-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Cursos</Link>
            </li>
            <li>
              <Link href="/methodology">Metodologia</Link>
            </li>
          </ul>
        </nav>

        <div className="col-span-1 flex justify-end">
          <UserMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
