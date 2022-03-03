import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FAQMainBg from "../../images/faqMain.png";



const FAQSectionContainer = tw(Element)`
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
`;

const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-white
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const FAQSectionWrapper = tw.div`
w-full
h-auto
relative
flex
flex-col
justify-center
items-center
mt-3
`;

const FAQMainWrapper = styled.div`
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
background-image: url(${FAQMainBg});
width: 100vw;
height: 95vw;
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

export function FAQSection() {
  return (
    <FAQSectionContainer name="FAQ">
      <Title>FAQ</Title>
      {/* <SectionInfo>  
      </SectionInfo> */}
      <FAQSectionWrapper>
          <FAQMainWrapper>

          </FAQMainWrapper>
      </FAQSectionWrapper>
    </FAQSectionContainer>
  );
}