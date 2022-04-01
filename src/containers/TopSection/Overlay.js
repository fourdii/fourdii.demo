import React , {useImperativeHandle, useRef ,forwardRef} from 'react'
// import { css } from "@emotion/react";
// import RingLoader from "react-spinners/RingLoader";
import tw from "twin.macro";
import styled from "styled-components";
import floor from './floor.jpg'
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { proxy, useSnapshot } from "valtio"


const state = proxy({
  isLeft: true,
})

const OverlayContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-[100vh]
    fixed  
    bottom-0
    // px-8
    // pt-16
    z-50
    bg-opacity-0
    // overflow-x-hidden
    // overflow-y-auto
    `};
    // background-image: url(${floor});

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
`;

const ContentWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-between
items-center
w-screen
`};
`;

const Content = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-center
items-center
text-xs
// pl-6
px-4
font-family[Roboto]
text-[#9EA9B4]
pb-4

// pt-10
`};
`;

const ContentButton = styled.button`
  ${tw`
flex
flex-row
justify-center
items-center
text-xs
px-4
font-family[Roboto]
text-[#9EA9B4]
pb-4
// pl-6
// pt-10
`};
`;

const ArrowsWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
items-center
justify-around
w-screen
h-full
`};
`;


const ArrowLeftWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-start
items-center
w-1/2
h-full
text-gray-500  
text-sm
`};
`;

const ArrowRightWrapper = styled.div`
  ${tw`
flex
flex-row
flex-nowrap
justify-end
items-center
w-1/2
h-full
text-gray-500 
text-sm
`};
`;

const ArrowLeft = styled.button`
  ${tw`
flex
flex-col
justify-center
items-center
`};
`;

const ArrowRight = styled.button`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
`};
`;


export default function Overlay({ ready, clicked, setClicked }){

  const snap = useSnapshot(state)


  return (
    <OverlayContainer>
      <ArrowsWrapper>
        <ArrowLeftWrapper>
          <ArrowLeft onClick={ (e) => (state.leftButtonClick = true)}  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-36 w-36"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </ArrowLeft>
        </ArrowLeftWrapper>
        <ArrowRightWrapper>
          <ArrowRight onClick={ (e) => (state.rightButtonClick = true)} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-36 w-36"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </ArrowRight>
        </ArrowRightWrapper>
      </ArrowsWrapper>
      {/* <Footer>
        <ContentWrapper>
          <Content>© 2022 Motorsport Network, All Rights Reserved</Content>
          <Content>
            <ContentButton>Terms of Service</ContentButton>
            <ContentButton>PrivacyPolicy</ContentButton>
          </Content>
        </ContentWrapper>
      </Footer> */}
    </OverlayContainer>
  );
    }




