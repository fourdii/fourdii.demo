import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RoadmapMainBg from "../../images/roadmapMain.png";
// import RoadmapMainTextBg from "../../images/roadmapMainText.png";
// import EarthOneBg from "../../images/earth1.png";
// import EarthTwoBg from "../../images/earth2.png";
// import EarthThreeBg from "../../images/earth3.png";
// import EarthFourBg from "../../images/earth4.png";
// import RoadmapFrameBg from "../../images/roadmapFrame.png";
 import { useMediaQuery } from "react-responsive";

const RoadmapSectionContainer =  styled.div`
${tw`
    w-auto
    h-auto    
    flex
    flex-col
    relative
    // pt-1
    // pb-1
    // xl:pt-2
    // xl:pb-2
    items-center      
`};
`;


const Title = tw.h1`
  text-3xl
    sm:text-5xl  
    font-bold
    text-center
    text-shadow[#fff 1px 0 10px;]   
  text-white
  // font-family[Tahoma]
  tracking-wide
  mb-8
  xsm:mb-2
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

// const RoadmapSectionWrapper = tw.div`
// w-full
// h-auto
// relative
// flex
// flex-col
// justify-center
// items-center
// mt-3
// `;


// const RoadmapMainTextWrapper = styled.div`
//   ${tw`  
//   flex
//   flex-col
//   justify-center
//   items-center
//   bg-contain 
//   bg-top
//   bg-no-repeat
//   bg-opacity-0
//   `};
//   background-image: url(${RoadmapMainTextBg});
//   width: 100vw;
//   height: 106vw;
// `;

const RoadmapMainWrapperMobile = styled.div`
  ${tw`
  flex
  flex-col
  relative
  bg-opacity-20
  items-center
  w-[88vw]
  border-4
  border-[#30e6ff]
  rounded
  bg-[#30e6ff]
  py-4
    `};

`;

const RoadmapMainWrapper = styled.div`
  ${tw`
  flex
  flex-col
  relative
   // xs:grid-cols-2
  // sm:grid-cols-3
  items-center
  bg-contain 
  bg-center
  bg-no-repeat
   w-[100vw]
   h-[105vw]
    `};
 background-image: url(${RoadmapMainBg});
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
`};
`;

const Member = styled.div`
  ${tw`
  bg-opacity-30
  bg-cover
  bg-no-repeat
  text-white
  font-bold
  flex
  flex-col
  justify-center
  // border-[#30e6ff]
  // bg-[#30e6ff]
  // border-2
  rounded
  self-center
  w-auto
  h-auto
  relative

  mt-0
xsm:pb-4
sm:pb-6
md:pb-6
lg:pb-12
xl:pb-14


`};
`;

const Paragraph = tw.p`
w-full
h-auto
relative
flex
flex-row
flex-wrap
items-start
text-white
font-bold
text-[6pt]
sm:text-xs
md:text-sm
mdlg:text-lg
lg:text-xl
xl:text-2xl
pl-1
`;

const Header = tw.h1`
text-shadow[#02befd 1px 0 10px;]   
w-auto
h-auto
relative
flex
flex-row
flex-wrap
items-start
text-white
font-bold
text-[10pt]
sm:text-sm
md:text-lg
mdlg:text-2xl
lg:text-3xl
xl:text-4xl
bg-opacity-80
rounded-md
mt-0
xsm:mt-4
sm:mt-6
md:mt-6
lg:mt-8
xl:mt-16
`;


export function RoadmapSection() {

  const matches = useMediaQuery({ minWidth: 550 });


  return (
    <RoadmapSectionContainer name="Roadmap" id="RoadmapSectionContainer">
      <TitleWrapper>
        <Title>Roadmap 1.0</Title>
      </TitleWrapper>
      {/* <RoadmapSectionWrapper id="RoadmapSectionWrapper"> */}
       { matches ?
          <RoadmapMainWrapper>
            <MemberWrapper>
              <Member>
                <Header>2022 Q2</Header>
                <Paragraph>♦️發佈完整白皮書與官網</Paragraph>
                <Paragraph> ♦️合作產業資訊</Paragraph>
                <Paragraph>♦️完售、啟動項目（尋找店面</Paragraph>
                <Paragraph>♦️票選台灣藝人協同合作</Paragraph>
                <Paragraph>♦️結合台灣在地商家5家給予持有者回饋</Paragraph>
                <Header>2022 Q3</Header>
                <Paragraph>♦️發佈完整企劃內容</Paragraph>
                <Paragraph>♦️定案實體商店服務與持有者回饋</Paragraph>
                <Paragraph>♦️定案空間設計與選址</Paragraph>
                <Paragraph>♦️第一次持有者空投</Paragraph>
                <Paragraph>♦️完整企劃定案與動工</Paragraph>
                <Paragraph>♦️社群資金低風險質押</Paragraph>
                <Paragraph>♦️打造全台最大最多元社群</Paragraph>
                <Header>2022 Q4</Header>
                <Paragraph>♦️實體店面開幕</Paragraph>
                <Paragraph>♦️置產元宇宙</Paragraph>
                <Header>2023 Q1</Header>
                <Paragraph>♦️發展實體二創與異業聯名</Paragraph>
                <Paragraph>♦️結合台灣在地商家10家給予持有者回饋</Paragraph>
                <Paragraph>♦️擴大台灣商家合作版圖</Paragraph>
                <Header>2023 Q2</Header>
                <Paragraph>♦️社群開發NFt虛實整合App、CCOD map</Paragraph>
                <Paragraph>♦️DAO投票參與公益團體</Paragraph>
                <Paragraph> ♦️發佈Roadmap 2.0</Paragraph>
              </Member>
            </MemberWrapper>
          </RoadmapMainWrapper>
          :
          <RoadmapMainWrapperMobile>
          <MemberWrapper>
          <Member>
            <Header>2022 Q2</Header>
            <Paragraph>♦️發佈完整白皮書與官網</Paragraph>
            <Paragraph> ♦️合作產業資訊</Paragraph>
            <Paragraph>♦️完售、啟動項目（尋找店面</Paragraph>
            <Paragraph>♦️票選台灣藝人協同合作</Paragraph>
            <Paragraph>♦️結合台灣在地商家5家給予持有者回饋</Paragraph>
            <br/>
            <Header>2022 Q3</Header>
            <Paragraph>♦️發佈完整企劃內容</Paragraph>
            <Paragraph>♦️定案實體商店服務與持有者回饋</Paragraph>
            <Paragraph>♦️定案空間設計與選址</Paragraph>
            <Paragraph>♦️第一次持有者空投</Paragraph>
            <Paragraph>♦️完整企劃定案與動工</Paragraph>
            <Paragraph>♦️社群資金低風險質押</Paragraph>
            <Paragraph>♦️打造全台最大最多元社群</Paragraph>
            <br/>
            <Header>2022 Q4</Header>
            <Paragraph>♦️實體店面開幕</Paragraph>
            <Paragraph>♦️置產元宇宙</Paragraph>
            <br/>
            <Header>2023 Q1</Header>
            <Paragraph>♦️發展實體二創與異業聯名</Paragraph>
            <Paragraph>♦️結合台灣在地商家10家給予持有者回饋</Paragraph>
            <Paragraph>♦️擴大台灣商家合作版圖</Paragraph>
            <br/>
            <Header>2023 Q2</Header>
            <Paragraph>♦️社群開發NFt虛實整合App、CCOD map</Paragraph>
            <Paragraph>♦️DAO投票參與公益團體</Paragraph>
            <Paragraph> ♦️發佈Roadmap 2.0</Paragraph>
          </Member>
        </MemberWrapper>
      </RoadmapMainWrapperMobile>
}
      {/* </RoadmapSectionWrapper> */}
    </RoadmapSectionContainer>
  );
}
