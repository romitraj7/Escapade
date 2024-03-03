import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function HeaderEvent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Rounds",
    "Prizes",
    "Contact Us",
    "FAQ's",
  ];
    
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
     
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarBrand className="mt-2 text-2xl"> 
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
        <NavbarItem>
          <Link href="#Rounds" aria-current="page" className="text-xl font-bold mt-3">
            Rounds
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Prizes" className="text-xl font-bold mt-3">
            Prizes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Contact Us" className="text-xl font-bold mt-3">
           Contact Us
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
          <NavbarMenuItem className='mt-3' key={`${item}-${index}`}>
            
            <Link
              className="w-full"
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
