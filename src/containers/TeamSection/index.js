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

// const SectionInfo = tw.p`
//     text-base
//     2xl:text-lg
//     text-gray-700
//     text-center
//     mt-8
//     2xl:mt-2
//     max-w-lg
//     xl:max-w-3xl
//     pl-4
//     pr-4
//     lg:pl-2
//     lg:pr-2
// `;

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
  grid-cols-3
  justify-center
  items-center
  bg-contain 
  bg-top
  bg-no-repeat
  bg-opacity-0
  `};
  background-image: url(${TeamMainBg});
  width: 100vw;
  height: 122vw;
`;


const MemberWrapper = styled.div`
${tw`
w-full
h-auto
  flex
  flex-col
  relative
`};
`;

const Member = styled.div`
  ${tw`
  bg-opacity-0
  h-[151px]
  w-[151px]
  bg-cover
  bg-no-repeat
`};
background-image: url(${AvatarBg});
`;

const NameEnglish = styled.div`
  ${tw`
  text-white
  text-sm
  font-bold
`};
`;

const NameChinese = styled.div`
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

const Instagram = styled.button`
  ${tw`
  w-[32.5px]
  h-[32.5px]
  bg-cover
`};
background-image: url(${InstagramBg});

`;

const Gmail = styled.button`
  ${tw`
  w-[32.5px]
  h-[32.5px]
  bg-cover

`};
background-image: url(${GmailBg});

`;

const Twitter = styled.button`
  ${tw`
  w-[32.5px]
  h-[32.5px]
  bg-cover

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
      <Title>Team</Title>
      {/* <SectionInfo>  
      </SectionInfo> */}
      <TeamSectionWrapper>
        <TeamMainWrapper>
          <MemberWrapper>
            <Member />
            <NameEnglish>English Name</NameEnglish>
            <NameChinese>Chinese Name</NameChinese>
            <SocialIconsWrapper>
              <Instagram></Instagram>
              <Gmail></Gmail>
              <Twitter></Twitter>
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
            <Member />
            <NameEnglish>English Name</NameEnglish>
            <NameChinese>Chinese Name</NameChinese>
            <SocialIconsWrapper>
              <Instagram></Instagram>
              <Gmail></Gmail>
              <Twitter></Twitter>
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
            <Member />
            <NameEnglish>English Name</NameEnglish>
            <NameChinese>Chinese Name</NameChinese>
            <SocialIconsWrapper>
              <Instagram></Instagram>
              <Gmail></Gmail>
              <Twitter></Twitter>
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
            <Member />
            <NameEnglish>English Name</NameEnglish>
            <NameChinese>Chinese Name</NameChinese>
            <SocialIconsWrapper>
              <Instagram></Instagram>
              <Gmail></Gmail>
              <Twitter></Twitter>
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
            <Member />
            <NameEnglish>English Name</NameEnglish>
            <NameChinese>Chinese Name</NameChinese>
            <SocialIconsWrapper>
              <Instagram></Instagram>
              <Gmail></Gmail>
              <Twitter></Twitter>
            </SocialIconsWrapper>
          </MemberWrapper>

          <MemberWrapper>
            <Member />
            <NameEnglish>English Name</NameEnglish>
            <NameChinese>Chinese Name</NameChinese>
            <SocialIconsWrapper>
              <Instagram></Instagram>
              <Gmail></Gmail>
              <Twitter></Twitter>
            </SocialIconsWrapper>
          </MemberWrapper>
        </TeamMainWrapper>
      </TeamSectionWrapper>
    </TeamSectionContainer>
  );
}
