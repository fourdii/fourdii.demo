import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/Navbar";
// import NftMainBg from "../../images/nftMain.png";

// import { useMediaQuery } from "react-responsive";


const TopSectionContainer = styled.div`
  ${tw`
  w-full
  h-auto
    flex
    flex-col
    relative  
  `};
`;

const TopSectionWrapper = styled.div`
  ${tw`
  w-full
  h-auto
  relative
  flex
  flex-col
  justify-center
  items-center
    `};
`;

// const NftMainWrapper = styled.div`
//   ${tw`
// flex
// flex-col
// justify-center
// items-center
// bg-cover 
// bg-center
// bg-no-repeat
// bg-opacity-0
// w-screen
// h-[60vh]
// sm:h-[65vh]
// `};
//   background-image: url(${NftMainBg});
// `;




export function TopSection() {

  //const isMobile = useMediaQuery({ maxWidth: 920 });


  return (
    <TopSectionContainer>
      <TopSectionWrapper>
        <NavBar />
        {/* {isMobile ?   */}
        {/* <TopBg>
          <TopPlanets>
            <TopText></TopText>    
            <TopCats></TopCats>        
          </TopPlanets>        
        </TopBg>  */}
        {/* : <NftMainWrapper /> } */}
       
      </TopSectionWrapper>
    </TopSectionContainer>
  );
}


