import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TeamMainBg from "../../images/teamMain.png";
import GmailBg from "../../images/GMAIL.png";
import TwitteBg from "../../images/TWITTER.png";
import InstagramBg from "../../images/IG.png";
import AvatarBg from "../../images/avatar.png";

import Guan from "../../images/guan.png";
import Joe from "../../images/joe.png";
import Junbgold from "../../images/jungold.png";
import Onehandmadebarber from "../../images/onehandmadebarber.png";
import Paul from "../../images/paul.png";
import R0 from "../../images/r0.png";



const TeamSectionContainer = tw(Element)`
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

const TeamSectionWrapper = tw.div`
w-full
h-auto
relative
    flex
    flex-col
    justify-center
    items-center
    mt-3
`;

const TeamMainWrapper = styled.div`
  ${tw`
  grid
  grid-cols-1  
  xs:grid-cols-2
  sm:grid-cols-3
  bg-contain 
  bg-top
  bg-no-repeat
  bg-opacity-0
  content-start

  gap-6
  p-12
   w-[88vw]

   
  `};
  background-image: url(${TeamMainBg});
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
`;


const MemberWrapper = styled.div`
${tw`
w-full
h-full
  flex
  flex-col
  relative
  items-center
  justify-center
 self-center
`};
`;

const Member = styled.div`
  ${tw`
  bg-opacity-0
  mb-2

  h-[200px]
  w-[200px]

  xs:w-[130px]
  xs:h-[130px]

  bg-cover
  bg-no-repeat
`};
background-image: url(${AvatarBg});
`;

const GuanBg = styled.div`
  ${tw`
  bg-opacity-0
  h-[200px]
  w-[200px]
  xs:w-[130px]
  xs:h-[130px]
  bg-cover
  bg-no-repeat
`};
background-image: url(${Guan});
`;

const JoeBg = styled.div`
  ${tw`
  bg-opacity-0
  h-[200px]
  w-[200px]
  xs:w-[130px]
  xs:h-[130px]
  bg-cover
  bg-no-repeat
`};
background-image: url(${Joe});
`;

const JunbgoldBg = styled.div`
  ${tw`
  bg-opacity-0
  h-[200px]
  w-[200px]
  xs:w-[130px]
  xs:h-[130px]
  bg-cover
  bg-no-repeat
`};
background-image: url(${Junbgold});
`;

const OnehandmadebarberBg = styled.div`
  ${tw`
  bg-opacity-0
  h-[200px]
  w-[200px]
  xs:w-[130px]
  xs:h-[130px]
  bg-cover
  bg-no-repeat
`};
background-image: url(${Onehandmadebarber});
`;

const PaulBg = styled.div`
  ${tw`
  bg-opacity-0
  h-[200px]
  w-[200px]
  xs:w-[130px]
  xs:h-[130px]
  bg-cover
  bg-no-repeat
`};
background-image: url(${Paul});
`;

const R0Bg = styled.div`
  ${tw`
  bg-opacity-0
  h-[200px]
  w-[200px]
  xs:w-[130px]
  xs:h-[130px]
  bg-cover
  bg-no-repeat
`};
background-image: url(${R0});
`;

const Name = styled.div`
  ${tw`
  text-white
  text-sm
  font-bold
`};
`;

const Info = styled.div`
  ${tw`
  text-white
  text-sm
  font-bold
`};
`;


const SocialIconsWrapper = styled.div`
  ${tw`
  flex
  flex-row
  flex-nowrap
  items-center
  justify-center
`};
`;

const Instagram = styled.a`
  ${tw`
  w-[32.5px]
  h-[32.5px]
  bg-contain 
  bg-no-repeat
  m-1
  `};
background-image: url(${InstagramBg});

`;

const Gmail = styled.a`
  ${tw`
  w-[32.5px]
  h-[32.5px]
  bg-contain 
  bg-no-repeat
  m-1
`};
background-image: url(${GmailBg});

`;

const Twitter = styled.a`
  ${tw`
  w-[32.5px]
  h-[32.5px]
  bg-contain 
  bg-no-repeat
  m-1
`};
background-image: url(${TwitteBg});

`;

// const Item = styled.div`
//   ${tw`
//         flex
//         flex-col
//     `}
//   img {
//     ${tw`
//             max-w-full
//             max-h-full
//         `}
//   }
// `;

// const Description = tw.p`
//     text-gray-300
//     text-center
//     bg-black
//     bottom-10
//     left-1/2
//     pl-4
//     pr-4
//     pt-2
//     pb-2
//     rounded-2xl
//     opacity-80
//     transform[translateX(-50%)]
//     absolute
// `;

export function TeamSection() {
  return (
    <TeamSectionContainer name="Team">
    <TitleWrapper><Title>Team</Title></TitleWrapper>  
      <TeamSectionWrapper>
        <TeamMainWrapper>
          <MemberWrapper>
            <Member>
              <GuanBg />
            </Member>
            <Name>罐罐皇</Name>
            <Info>-概念領導/社群開發</Info>
            <SocialIconsWrapper>
              <Instagram href="https://www.instagram.com/EPforcan/" target="_blank"></Instagram>
              <Twitter href="https://twitter.com/CLYang_1985" target="_blank"></Twitter>
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
            <Member>
              <JoeBg />
            </Member>
            <Name>Joe</Name>
            <Info>-首席藝術家</Info>
            <SocialIconsWrapper>
              <Gmail href="mailto:andykwsc@gmail.com"></Gmail>
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
            <Member>
              <JunbgoldBg />
            </Member>
            <Name>JunGold</Name>
            <Info>-聯合創始人/藝術家</Info>
            <SocialIconsWrapper>
              <Instagram href="https://instagram.com/jungold.0?utm_medium=copy_link" target="_blank"></Instagram>
              <Twitter href="https://twitter.com/jungold_ccod" target="_blank"></Twitter>
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
          <Member>
              <OnehandmadebarberBg />
            </Member>
            <Name>Onehandmadebarber</Name>
            <Info>-獨家合作</Info>
            <SocialIconsWrapper>
              <Instagram href="https://instagram.com/onehandmadebarber?utm_medium=copy_link" target="_blank"></Instagram>            
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
          <Member>
              <PaulBg />
            </Member>
            <Name>Paul</Name>
            <Info>-品牌規劃/設計行銷</Info>
            <SocialIconsWrapper>
              <Instagram href="https://www.instagram.com/iwillbedie99/" target="_blank"></Instagram>              
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
          <Member>
              <R0Bg />             
            </Member>
            <Name>R0</Name>
            <Info>-聯合創始人/社群開發</Info>
            <SocialIconsWrapper>
              <Instagram href="https://www.instagram.com/r01319/" target="_blank"></Instagram>
              <Gmail href="a12398s113@gmail.com" target="_blank"></Gmail>             
            </SocialIconsWrapper>
          </MemberWrapper>
        </TeamMainWrapper>
      </TeamSectionWrapper>
    </TeamSectionContainer>
  );
}
