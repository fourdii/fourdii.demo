import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutMainBg from "../../images/aboutMain.png";

const AboutSectionContainer = tw(Element)`
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
   
`;

const Title = tw.h1`
text-3xl
sm:text-5xl
    text-shadow[#fff 1px 0 10px;]      
    text-white
    font-bold
    text-center
    // font-family[Tahoma]
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
my-8
`};
`;



const AboutSectionWrapper = tw.div`
w-full
h-auto
relative
flex
flex-col
justify-center
items-center
`;

const AboutMainWrapper = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-contain 
bg-top
bg-no-repeat
bg-opacity-30
w-[88vw]
py-6
px-5
sm:py-8
sm:px-14
border-[#30e6ff]
bg-[#30e6ff]
border-4
rounded
`};
`;

const Paragraph = tw.p`
w-full
h-auto
relative
flex
flex-row
flex-wrap
justify-center
items-center
text-center
text-white
font-bold
text-sm
sm:text-lg
`;

const Header = tw.h1`
text-shadow[#02befd 1px 0 10px;]   
w-auto
h-auto
relative
flex
flex-row
flex-wrap
justify-center
items-center
text-white
font-bold
text-lg
sm:text-2xl
bg-[#02befd]
bg-opacity-80
py-1
px-6
rounded-md
my-3
sm:my-6
`;



export function AboutSection() {
  return (
    <AboutSectionContainer name="About">
      <TitleWrapper>
        <Title>About</Title>
      </TitleWrapper>
      <AboutSectionWrapper>
        <AboutMainWrapper>
          <Header>ONE HAND MADE BARBER</Header>
          <Paragraph>
            一手製造理髮廳於2017年由JunGold創辦，成立至今四年半的時間，秉持著提供顧客高品質服務與感受為初衷。
          </Paragraph>
          <br />
          <Paragraph>
            持續優化品牌、行銷與管理，重視每一位人才，以人性化管理方式，激發同仁的專長與天份。
          </Paragraph>
          <br />
          <Paragraph>
            隨著業績與客量逐步增長，
            各方媒體也積極與品牌合作、曝光。在疫情肆虐各行各業大幅受挫的情況，以穩健且驚人的速度復甦，不外乎是品牌始終要求的：「高水準服務與品質」。
          </Paragraph>
          <br />
          <Paragraph>
            我們公開實名且提供創業以來的業績績效與客戶數量成⻑率， 主要讓
            真正了解與決定是否參與這個項目，
            實體商業追求的不是短期暴利而是⻑期的穩定收益。
          </Paragraph>
          <br />
          <Paragraph>
            你是否也有好的想法，卻礙於門檻、資源等各項因素無法實現？
          </Paragraph>
          <br />
          <Paragraph>
            這點我們感同身受! 團隊為此創立了Cocaine Cat OHM
            DAO項目，建構社群對我們而言就像是第二次創業。從零開始從頭到尾，再次重拾心裡的激動與興奮。
          </Paragraph>
          <br />
          <Header>每位持有者</Header>
          <Paragraph>
            皆能以DAO的形式參與未來項目發展，一同建立長期投資與正確觀念的社群平台。
          </Paragraph>
          <br />
          <Header>第一批發行的NFT</Header>
          <Paragraph>
            屬實體創業項目，實現以小資金創業，達到長期穩定收益的最終目的。
          </Paragraph>
          <br />
          <Header>首步規劃</Header>
          <Paragraph>
            開設台灣第一家DAO共治的理髮廳複合酒吧與元宇宙置產，第二家實體商店將以社群共識投票擇產業、創業。
          </Paragraph>
          <br />
          <Header>最終目的</Header>
          <Paragraph>
            打造全台最多元人才與多產業結合的社群，期間團隊會陸續與台灣各產業商家達成合作與回饋。
          </Paragraph>
          <br />
          <Paragraph>
            科技永遠只會越發進步且不可逆，未來我們的生活將與網路密不可分，希望與更多人一起學習並暸解這些世界的趨勢以及動向。⼀起改變現有的規則，重新審視並賦予NFT全新內在價值。
          </Paragraph>
          <br />
          <Paragraph>
            我們有信心發揚共同創辦的實體商店，且獲利空間也將相當可觀。
          </Paragraph>
        </AboutMainWrapper>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
}
