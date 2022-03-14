import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
// import { deviceSize } from "../responsive";
import { slide as Menu } from "react-burger-menu";
import styles from "./menuStyles";
import logo from './Logo.png'


const Container = styled.div`
  ${tw`
        w-screen
        flex
        h-[0vh]
        lg:h-[10vh]
        pl-6
        pr-6        
        mt-0
        bg-gray-300
        items-center
        self-center  
        justify-center 
        fixed
        z-50
    `};
`;

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    flex
    justify-center
    items-center
    self-center  
`;



const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-[#e20620]
    cursor-pointer
    font-bold
    text-sm
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
    box-content
    mx-6
    lg:mb-0
  tracking-wide
   text-shadow[#e20620 1px 0 10px;]
`;

// const NavItemLogo = tw.button`
//     lg:mr-8
//     flex
//     items-center
//     justify-center
//     min-h-full
//     text-[#00fff7]
//     cursor-pointer
//     font-bold
//     text-xl
//     transition-colors
//     transition-duration[300ms]
//     hover:text-gray-200
//     box-content
//     mx-6
//     lg:mb-0
//   tracking-wide
//   text-shadow[#00fff7 1px 0 10px;]
// `;

const LogosRight = tw.ul`
    container 
    flex 
    flex-nowrap 
    justify-end 
    items-center 
    mx-auto
    
`;

const LogosLeft = tw.ul`
    container 
    flex 
    flex-nowrap 
    justify-start 
    items-center 
    mx-auto
    
`;

const NavItemLogo = tw.button`
    flex
    items-center
    justify-center
    min-h-full
    text-white
    cursor-pointer
    font-bold
    text-xl
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
    box-content
    mx-2
   text-shadow[#00fff7 1px 0 10px;]
`;

const ConnectWalletButton = tw.button`
    flex
    items-center
    justify-center
    min-h-full
    cursor-pointer
    font-bold
    text-xs
    transition-colors
    transition-duration[300ms]
    // bg-gradient-to-r from-red-700 via-blue-900  to-yellow-500
bg-gray-400
     bg-opacity-10
    // bg-[#041628]
     border-2
    border-[#fcd800]
    text-[#fcd800]
    
    w-32
    h-8
    rounded
`;

const Logo = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-cover 
bg-center
bg-no-repeat
w-[10vw]
h-[2.71vw]
`};
  background-image: url(${logo});
`;

export function NavBar() {

    const isMobile = useMediaQuery({ maxWidth: 1024 });

    const navItems =( 
    <NavItems>
        {/* <NavItem>
            <Link to="NFT">NFT</Link>
        </NavItem>
        <NavItem>
            <Link to="Roadmap">ROADMAP</Link>
        </NavItem>
        <NavItem>
            <Link to="Team">TEAM</Link>
        </NavItem>
        <NavItem>
            <Link to="About">ABOUT</Link>
        </NavItem>     
        <NavItem>
            <Link to="Marketplace">MARKETPLACE</Link>
        </NavItem>                  */}
    </NavItems>
    )

    const navItemsMobile = (
      <NavItems>
       {/* <NavItem>
            <Link to="NFT">NFT</Link>
        </NavItem>
        <NavItem>
            <Link to="Roadmap">ROADMAP</Link>
        </NavItem>
        <NavItem>
            <Link to="Team">TEAM</Link>
        </NavItem>
        <NavItem>
            <Link to="About">ABOUT</Link>
        </NavItem>     
        <NavItem>
            <Link to="Marketplace">MARKETPLACE</Link>
        </NavItem>  */}
      </NavItems>
    );


  return (
    <Container>
      <LogosLeft>
        <NavItemLogo>
          <Logo />
        </NavItemLogo>
        <NavItemLogo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-discord"
            viewBox="0 0 16 16"
            opacity={0}
          >
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
          </svg>
        </NavItemLogo>
      </LogosLeft>
      {/* {isMobile && (
        <Menu right styles={styles}>
          {navItemsMobile}
        </Menu>
      )}
      {!isMobile && navItems} */}

      <LogosRight>
        {/* <NavItemLogo>
          <ConnectWalletButton>CONNECT</ConnectWalletButton>
        </NavItemLogo> */}

        <NavItemLogo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </NavItemLogo>
        <NavItemLogo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </NavItemLogo>
        <NavItemLogo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </NavItemLogo>
      </LogosRight>
    </Container>
  );
};