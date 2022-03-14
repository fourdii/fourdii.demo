import React from 'react'
// import { css } from "@emotion/react";
// import RingLoader from "react-spinners/RingLoader";
import tw from "twin.macro";
import styled from "styled-components";
import ring from './ring.png'
import floor from './floor.jpg'


const FooterContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-[10vh]
    fixed  
    bottom-0
    // px-8
    // pt-16
    z-50
    // overflow-x-hidden
    // overflow-y-auto
    `};
    background-image: url(${floor});

`;

const Footer = styled.div`
  ${tw`
    flex
    flex-row
    w-full
    h-full
    border-opacity-10
    // border-b-[1px]
    // border-l-[1px]
    // border-r-[1px]
    border-gray-500  
    // overflow-x-hidden
    // overflow-y-auto
    `};
`;




const RingWrapper = styled.div`
  ${tw`
flex
flex-row
justify-between
items-center
`};
`;

const Ring = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-cover 
bg-center
bg-no-repeat
w-[5.99vw]
h-[3.85vw]
`};
  background-image: url(${ring});
`;

const ContentWrapper = styled.div`
  ${tw`
flex
flex-row
justify-end
items-center
`};
`;

const Content = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
font-semibold
text-gray-300
text-xs
pl-6
pt-10
`};
`;


export default function Overlay({ ready, clicked, setClicked }) {
  return (
    <FooterContainer>
        {/* <RingWrapper>
        <ContentWrapper>
          <Content>2022 Car Launches Red Bull Unveil The RB18</Content>
        </ContentWrapper>
          <Ring/>
        </RingWrapper> */}
      <Footer>      
      </Footer>
    </FooterContainer>
  );
}


