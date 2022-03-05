import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RoadmapMainBg from "../../images/roadmapMain.png";
import RoadmapMainTextBg from "../../images/roadmapMainText.png";



const RoadmapSectionContainer = tw(Element)`
    w-full
    h-auto
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
    mt-20
`;

const Title = tw.h1`
    text-3xl  
    text-white
    font-bold
    text-center
`;

const TitleWrapper = styled.div`
${tw`
flex
flex-col
justify-center
items-center
w-screen
h-full
relative
`};
`;

const RoadmapSectionWrapper = tw.div`
w-full
h-auto
relative
flex
flex-col
justify-center
items-center
mt-3
`;

const RoadmapMainWrapper = styled.div`
  ${tw`  
  flex
  flex-col
  justify-center
  items-center
  bg-contain 
  bg-top
  bg-no-repeat
  bg-opacity-0
  `};
  background-image: url(${RoadmapMainBg});
  width: 100vw;
  height: 106vw
`;

const RoadmapMainTextWrapper = styled.div`
  ${tw`  
  flex
  flex-col
  justify-center
  items-center
  bg-contain 
  bg-top
  bg-no-repeat
  bg-opacity-0
  `};
  background-image: url(${RoadmapMainTextBg});
  width: 100vw;
  height: 106vw
`;



const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}
  img {
    ${tw`
            max-w-full
            max-h-full
        `}
  }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

export function RoadmapSection() {
  return (
    <RoadmapSectionContainer name="Roadmap" id="RoadmapSectionContainer">
    <TitleWrapper> <Title>Roadmap</Title></TitleWrapper> 
      <RoadmapSectionWrapper id="RoadmapSectionWrapper">
        <RoadmapMainTextWrapper id="RoadmapMainTextWrapper">
        </RoadmapMainTextWrapper>
      </RoadmapSectionWrapper>
    </RoadmapSectionContainer>
  );
}