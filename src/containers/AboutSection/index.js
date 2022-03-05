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
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`;

const Title = tw.h1`
    text-3xl
    // lg:text-2xl
    // xl:text-3xl
    // 2xl:text-5xl
    // mt-14
    font-bold
    text-center
    text-white
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
mt-24
-mb-6
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
-m-8
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
bg-opacity-0
w-[92vw]
py-36
px-20
`};
  background-image: url(${AboutMainBg});
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
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
text-white
font-bold
text-sm
sm:text-lg
`;



export function AboutSection() {
  return (
    <AboutSectionContainer name="About">
      <TitleWrapper><Title>About</Title></TitleWrapper>
      <AboutSectionWrapper>
        <AboutMainWrapper>
          <Paragraph>一手製造理髮廳於2017年由JunGold創辦</Paragraph>
          <br />
          <Paragraph>成立至今四年半的時間，秉持著提供顧客高品質服務與感受為初衷。</Paragraph>
          <br />
          <Paragraph>
            持續優化品牌、行銷與管理，重視每一位人才，以人性化管理方式，
            激發同仁的專長與天份。
          </Paragraph>
          <br />
          <Paragraph>隨著業績與客量逐步增長， 各方媒體也積極與品牌合作、曝光。</Paragraph>
          <br />
          <Paragraph>
            在疫情肆虐各行各業大幅受挫的情況，以穩健且驚人的速度復甦，不外乎是品牌始終要求的：「高水準服務與品質」。
          </Paragraph>
          <br />
          <Paragraph>你是否也有好的想法，卻礙於門檻、資源等各項因素無法實現？</Paragraph>
          <br />
          <Paragraph>這點我們感同身受!</Paragraph>
          <br />
          <Paragraph>
            團隊為此創立了Cocaine Cat OHM
            DAO項目，建構社群對我們而言就像是第二次創業。
          </Paragraph>
          <br />
          <Paragraph>從零開始從頭到尾，再次重拾心裡的激動與興奮。</Paragraph>
          <br/>
          <Paragraph>
            每位持有者，皆能以DAO的形式參與未來項目發展，一同建立長期投資與正確觀念的社群平台。
          </Paragraph>
          <Paragraph>
            第一批發行的NFT，屬實體創業項目，實現以小資金創業，
            達到長期穩定收益的最終目的。
          </Paragraph>
          <br />
          <Paragraph>首步規劃</Paragraph>
          <Paragraph>
            開設台灣第一家DAO共治的理髮廳複合酒吧與元宇宙置產，第二家實體商店將以社群共識投票擇產業、創業。
          </Paragraph>
          <br />
          <Paragraph>最終目的</Paragraph>
          <Paragraph>
            打造全台最多元人才與多產業結合的社群，期間團隊會陸續與台灣各產業商家達成合作與回饋。
          </Paragraph>
          <br />
          <Paragraph>科技永遠只會越發進步且不可逆</Paragraph>
          <Paragraph>未來我們的生活將與網路密不可分，</Paragraph>
          <Paragraph>希望與更多人一起學習並暸解這些世界的趨勢以及動向。</Paragraph>
          <br />
          <Paragraph>⼀起改變現有的規則</Paragraph>
          <Paragraph>重新審視並賦予NFT全新內在價值。</Paragraph>
        </AboutMainWrapper>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
}
