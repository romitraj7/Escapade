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
        <NavbarBrand className="mt-2 text-2xl"> 
          <p className="font-bold mt-3">ESCAPADE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand className="mt-4 text-4xl">
          <p className="font-bold">ESCAPADE</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#Events" aria-current="page">
            Events
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#TimeLine">
            Timeline
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" href="#Sponsors">
            Sponsors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#FAQ's">
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
