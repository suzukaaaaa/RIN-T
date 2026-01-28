import { Link } from "react-router-dom"
import { FaSearch, FaUser, FaRegHeart, FaShoppingBag, FaBars  } from "react-icons/fa"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/components/ui/sheet"

export default function Header() {
  const categories = [
    'NEW ARRIVALS',
    'LADIES',
    'MENS',
    'KIDS',
    'STORY',
    'CONTENTS',
    'CONTACT',
  ]

  const headerIcons = [
    { icon: FaSearch, name: 'search' },
    { icon: FaUser, name: 'user' },
    { icon: FaRegHeart, name: 'heart' },
    { icon: FaShoppingBag, name: 'bag' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[81px] text-primary bg-white border-b border-gray-200 shadow-sm z-[1000]">
      <div className="flex items-center justify-between  mx-auto px-5 h-20">
        <div className="text-4xl font-bold tracking-wider min-w-[150px]">
          RIN-T
        </div>
        <nav className="hidden md:flex flex-1 justify-center gap-[30px]">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="text-[14px] cursor-pointer transition-opacity no-underline duration-300 whitespace-nowrap hover:opacity-70"
            >
              {category}
            </a>
          ))}
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <FaBars className="text-[22px]" />
                </SheetTrigger>
                <SheetContent  className="pt-[81px]">
                    <SheetHeader>
                        {/* <SheetTitle className="text-black">Are you absolutely sure?</SheetTitle> */}
                        <SheetDescription>
                            <div className="text-gray-800">
                                <div className="flex flex-col space-y-3 mt-4">
                                    {categories.map((category) => (
                                        <a
                                        key={category}
                                        href="#"
                                        className="text-lg text-left cursor-pointer border-b border-gray-300 transition-opacity no-underline duration-300 whitespace-nowrap hover:opacity-70"
                                        >
                                        {category}
                                        </a>
                                    ))}
                                </div>
                                <div className="flex gap-7 justify-center mt-10">
                                    {headerIcons.map(({ icon: Icon, name }) => (
                                        <a
                                        key={name}
                                        href="#"
                                        className="text-2xl no-underline cursor-pointer transition-opacity duration-300 hover:opacity-70 visited:text-black"
                                        >
                                        <Icon color="text-primary" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
        <div className="gap-5 min-w-[150px] justify-end hidden md:flex">
          {headerIcons.map(({ icon: Icon, name }) => (
            <a
              key={name}
              href="#"
              className="text-[18px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-70 visited:text-black"
            >
              <Icon color="text-primary" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
