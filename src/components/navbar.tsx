// import Image from "next/image"
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
            <Link href={"/"}>
                <h1 className="text-black font-bold text-[23px]">AK Online Market</h1>
            </Link>

            <div className="flex items-center space-x-2.5 text-sm">
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 hover:text-gray-900 ">Home page</Link>
      <Link href={'/products'} className="mr-5 hover:text-gray-900">All products</Link>
    
    </nav>

            <button
  type="button"
  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md border-2 border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600"
>
  Log in
</button>
<button
  type="button"
  className="px-4 py-2 border-blue-600  font-medium rounded-md border-2 hover:border-transparent hover:bg-blue-600 hover:text-white text-black"
>
  Sign up
</button>

            </div>
        </header>
    );
};

export default Navbar;
