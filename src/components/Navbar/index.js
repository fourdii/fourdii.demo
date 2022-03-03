import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../Logo";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { slide as Menu } from "react-burger-menu";
import styles from "./menuStyles";

const Container = styled.div`
 
  ${tw`
        w-screen
        flex
        h-20
        pl-6
        pr-6        
        mt-0
        // sm:border-2
        // sm:rounded-full
        sm:bg-black
        sm:border-b-4
        //sm:border-gray-200
        // sm:border-opacity-50
        items-center
        self-center  
        justify-center 
    `};
`;

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    flex
    // lg:ml-20
    justify-center
    items-center
    self-center  

    sm:justify-around

`;

const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-white
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
    box-content
    // mb-2
    lg:mb-0
`;

export function NavBar() {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    const navItems =( 
    <NavItems>
        <NavItem>
            <Link to="NFT">NFT</Link>
        </NavItem>
        <NavItem>
            <Link to="Roadmap">Roadmap</Link>
        </NavItem>
        <NavItem>
            <Link to="Team">Team</Link>
        </NavItem>
        <NavItem>
            <Link to="About">About</Link>
        </NavItem>
        <NavItem>
            <Link to="FAQ">FAQ</Link>
        </NavItem>       
    </NavItems>
    )


  return (
    <Container>
    {/* <Logo /> */}
    {isMobile && (
      <Menu right styles={styles}>
        {navItems}
      </Menu>
    )}
    {!isMobile && navItems}
  </Container>
  );
};