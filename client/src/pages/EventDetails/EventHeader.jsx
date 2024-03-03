import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function EventHeader() {
  return (
    <Navbar>
      <NavbarBrand className="flex mb-2 mt-2 text-4xl"> 
          <p className="font-bold mt-3 ml-12">ESCAPADE</p>
        </NavbarBrand>
      <NavbarContent className="flex flex-col justify-center items-end mt-10" >
        <NavbarItem className="flex gap-2" >
          <Button as={Link} color="secondary" href="/" className="text-black" variant="flat">
            Home
          </Button>
          <Button as={Link} color="secondary" href="/events" variant="flat" className="text-black">
            Events
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
