import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RoadmapMainBg from "../../images/roadmapMain.png";
import RoadmapMainTextBg from "../../images/roadmapMainText.png";
import EarthOneBg from "../../images/earth1.png";
import EarthTwoBg from "../../images/earth2.png";
import EarthThreeBg from "../../images/earth3.png";
import EarthFourBg from "../../images/earth4.png";
import RoadmapFrameBg from "../../images/roadmapFrame.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const RoadmapSectionContainer = tw(Element)`
    w-full
    h-auto
    flex
    flex-col
    relative
    // pt-1
    // pb-1
    // xl:pt-2
    // xl:pb-2
    items-center
    mt-20
`;

const Title = tw.h1`
    text-3xl  
    font-bold
    text-center
    text-shadow[#fff 1px 0 10px;]   
  text-white
  font-family[Tahoma]
  tracking-wide
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
  height: 106vw;
`;

const RoadmapMainWrapper = styled.div`
  ${tw`
  grid
  grid-cols-1  
  xs:grid-cols-2
  sm:grid-cols-3
  // bg-contain 
  // bg-top
  // bg-no-repeat
  bg-opacity-20
  content-start
  gap-6
  p-12
  w-[88vw]
  border-4
  border-[#30e6ff]
  rounded
  bg-[#30e6ff]
    `};
  // background-image: url(${RoadmapMainBg});
  // -moz-background-size: 100% 100%;
  // -webkit-background-size: 100% 100%;
  // background-size: 100% 100%;
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
  bg-opacity-30
  bg-cover
  bg-no-repeat
  p-2
  text-sm
  text-white
  font-bold
  border-[#30e6ff]
  bg-[#30e6ff]
  border-2
  rounded
`};
  // background-image: url(${RoadmapFrameBg});
  // -moz-background-size: 100% 100%;
  // -webkit-background-size: 100% 100%;
  // background-size: 100% 100%;
`;

const EarthOne = styled.div`
  ${tw`
  bg-opacity-0
  w-[90vw]
  h-[90vw]
  bg-cover
  bg-no-repeat
  -mt-20
  -mb-8
`};
  background-image: url(${EarthOneBg});
`;

const EarthTwo = styled.div`
  ${tw`
  bg-opacity-0
  w-[90vw]
  h-[90vw]
  bg-cover
  bg-no-repeat
  -mt-20
  -mb-10
`};
  background-image: url(${EarthTwoBg});
`;

const EarthThree = styled.div`
  ${tw`
  bg-opacity-0
  w-[90vw]
  h-[90vw]
  bg-cover
  bg-no-repeat
  -mt-10
  -mb-12
`};
  background-image: url(${EarthThreeBg});
`;

const EarthFour = styled.div`
  ${tw`
  bg-opacity-0
  w-[90vw]
  h-[90vw]
  bg-cover
  bg-no-repeat
  -mt-14
  -mb-10
`};
  background-image: url(${EarthFourBg});
`;


export function RoadmapSection() {
  const matches = useMediaQuery("(min-width:420px)");

  return (
    <RoadmapSectionContainer name="Roadmap" id="RoadmapSectionContainer">
      <TitleWrapper>
        <Title>Roadmap 1.0</Title>
      </TitleWrapper>
      <RoadmapSectionWrapper id="RoadmapSectionWrapper">
        {!matches ? (
          <RoadmapMainWrapper>
            <MemberWrapper>
              <Member>
                <p>2022 Q2</p>
                <br />
                <p>♦️發佈完整白皮書與官網 ♦️合作產業資訊</p>
                <br />
                <p>♦️完售、啟動項目（尋找店面</p>
                <br />
                <p>♦️票選台灣藝人協同合作</p>
                <br />
                <p>♦️結合台灣在地商家5家給予持有者回饋</p>
              </Member>
            </MemberWrapper>

            <MemberWrapper>
              <EarthOne></EarthOne>
            </MemberWrapper>

            <MemberWrapper>
              <Member>
                <p>2022 Q3</p>
                <br />
                <p>♦️發佈完整企劃內容</p>
                <br />
                <p>♦️定案實體商店服務與持有者回饋</p>
                <br />
                <p>♦️定案空間設計與選址</p>
                <br />
                <p>♦️第一次持有者空投</p>
                <br />
                <p>♦️完整企劃定案與動工</p>
                <br />
                <p>♦️社群資金低風險質押 ♦️打造全台最大最多元社群</p>
              </Member>
            </MemberWrapper>

            <MemberWrapper>
              <EarthTwo></EarthTwo>
            </MemberWrapper>

            <MemberWrapper>
              <Member>
                <p>2022 Q4</p>
                <br />
                <p>♦️實體店面開幕</p>
                <br />
                <p>♦️置產元宇宙</p>
              </Member>
            </MemberWrapper>

            <MemberWrapper>
              <EarthThree></EarthThree>
            </MemberWrapper>

            <MemberWrapper>
              <Member>
                <p>2023 Q1</p>
                <br />
                <p>♦️發展實體二創與異業聯名</p>
                <br />
                <p>♦️結合台灣在地商家10家給予持有者回饋</p>
                <br />
                <p>♦️擴大台灣商家合作版圖</p>
              </Member>
            </MemberWrapper>

            <MemberWrapper>
              <EarthFour></EarthFour>
            </MemberWrapper>

            <MemberWrapper>
              <Member>
                <p>2024 Q2</p>
                <br />
                <p>♦️社群開發NFt虛實整合App、CCOD map ♦️DAO投票參與公益團體</p>
                <br />
                <p> ♦️發佈Roadmap 2.0</p>
              </Member>
            </MemberWrapper>
          </RoadmapMainWrapper>
        ) : (
          <RoadmapMainTextWrapper id="RoadmapMainTextWrapper"></RoadmapMainTextWrapper>
        )}
      </RoadmapSectionWrapper>
    </RoadmapSectionContainer>
  );
}
