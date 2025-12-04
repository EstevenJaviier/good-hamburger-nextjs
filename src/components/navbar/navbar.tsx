import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-full bg-white shadow px-6 py-4 fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            🍔 GOOD HAMBURGER
          </h1>

          <div className="flex gap-4">
            <Link href="/" className="hover:text-blue-500">
              Menú
            </Link>

            <Link href="/orders" className="hover:text-blue-500">
              Órdenes
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
