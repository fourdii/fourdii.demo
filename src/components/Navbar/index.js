import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
// import { deviceSize } from "../responsive";
import { slide as Menu } from "react-burger-menu";
import styles from "./menuStyles";
import redbull from './redbull.png'


const Container = styled.div`
  ${tw`
        w-screen
        flex
        h-[0vh]
        lg:h-[10vh]
        pl-6
        pr-6        
        mt-0
        bg-[#191920]
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
    text-gray-400
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
w-[5vw]
h-[3.025vw]
`};
  background-image: url(${redbull});
`;

export function NavBar() {

    const isMobile = useMediaQuery({ maxWidth: 1024 });

    const navItems =( 
    <NavItems>
        <NavItem>
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
        </NavItem>     
        <NavItem>
        {/* <ConnectWalletButton>CONNECT</ConnectWalletButton> */}

        </NavItem>       
    </NavItems>
    )

    const navItemsMobile = (
      <NavItems>
       <NavItem>
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
        </NavItem> 
      </NavItems>
    );


  return (
    <Container>
      <LogosLeft>
        <NavItemLogo>
        <Logo/>
        </NavItemLogo>
        {/* <NavItemLogo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-discord"
            viewBox="0 0 16 16"
            opacity={0}
          >
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
          </svg>
        </NavItemLogo> */}
      </LogosLeft>
      {isMobile && (
        <Menu right styles={styles}>
          {navItemsMobile}
        </Menu>
      )}
      {!isMobile && navItems}

      <LogosRight>
        <NavItemLogo>
          <ConnectWalletButton>CONNECT</ConnectWalletButton>
        </NavItemLogo>

        {/* <NavItemLogo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </NavItemLogo>
        <NavItemLogo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-discord"
            viewBox="0 0 16 16"
          >
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
          </svg>
        </NavItemLogo> */}
      </LogosRight>
    </Container>
  );
};