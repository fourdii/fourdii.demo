import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/Navbar";
import NftMainBg from "../../images/nftMain.png";
import TopCatsBg from "../../images/topcats.png";
import TopTextBg from "../../images/toptext.png";
import TopPlanetsBg from "../../images/topplanets.png";
import TopBackgroundBg from "../../images/topbg.png";
import { useMediaQuery } from "react-responsive";


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

const NftMainWrapper = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-cover 
bg-center
bg-no-repeat
bg-opacity-0
w-screen
h-[100vh]
sm:h-[90vh]
`};
  background-image: url(${NftMainBg});
`;


const TopBg = styled.div`
${tw`
flex
flex-col
justify-center
items-center
bg-cover 
bg-no-repeat
bg-opacity-0
w-screen
h-[100vh]
relative
`};
background-image: url(${TopBackgroundBg});
`;

const TopText = styled.div`
${tw`
flex
flex-col
justify-center
items-center
bg-contain 
bg-center
bg-no-repeat
bg-opacity-0
w-[80vw]
h-full
relative
z-30
`};
background-image: url(${TopTextBg});
`;

const TopCats = styled.div`
${tw`
items-center
bg-cover 
bg-top
bg-no-repeat
bg-opacity-0
w-full
h-full
relative
z-40
`};
background-image: url(${TopCatsBg});
`;

const TopPlanets = styled.div`
${tw`
flex
flex-col
justify-center
items-center
bg-contain 
bg-center
bg-no-repeat
bg-opacity-0
w-screen
h-[100vh]
relative
z-20
`};
background-image: url(${TopPlanetsBg});
`;


export function TopSection() {

  const isMobile = useMediaQuery({ maxWidth: 920 });


  return (
    <TopSectionContainer>
      <TopSectionWrapper>
        <NavBar />
        {isMobile ?  <TopBg>
          <TopPlanets>
            <TopText></TopText>    
            <TopCats></TopCats>        
          </TopPlanets>        
        </TopBg> : <NftMainWrapper /> }
       
      </TopSectionWrapper>
    </TopSectionContainer>
  );
}


