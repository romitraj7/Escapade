import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Events",
    "Sponsors",
    "FAQ's",
  ];
    
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
     
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarBrand className="mt-2 text-3xl "> 
          <p className="font-bold text-black font-serif mt-4">ESCAPADE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand className="mt-4 text-4xl">
          <a href="/" className="text-decoration-none ">
          <p className="font-bold text-black font-serif">ESCAPADE</p>
          </a>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/" className="text-xl font-bold mt-3">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#Events" aria-current="page" className="text-xl font-bold mt-3">
            Events
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#TimeLine">
            Timeline
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" href="#Sponsors" className="text-xl font-bold mt-3">
            Sponsors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#FAQ's" className="text-xl font-bold mt-3">
            FAQ'S
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu className="flex items-center h-50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-3 text-2xl " key={`${item}-${index}`}>
            
            <Link
              className="w-100px "
              href={(item === 'Home' ?'/': `#${item}`)}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
