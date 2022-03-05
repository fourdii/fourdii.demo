import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/Navbar";
import NftMainBg from "../../images/nftMain.png";

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
// flex
// flex-col
// justify-center
// items-center
// bg-contain 
// bg-top
// bg-no-repeat
// bg-opacity-0
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
  // width: 100vw;
  // height: 56.3vw;
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <TopSectionWrapper>
        <NavBar />
        <NftMainWrapper />
      </TopSectionWrapper>
    </TopSectionContainer>
  );
}


