import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FAQMainBg from "../../images/faqMain.png";
import FAQHeaderBg from "../../images/faqHeader.png";
import FAQBg from "../../images/faq.png";
import { useMediaQuery } from "react-responsive";


const FAQSectionContainer = tw(Element)`
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
    mb-4
`;

const Title = tw.h1`
    text-3xl
    text-shadow[#fff 1px 0 10px;]   
    text-white
    font-bold
    text-center
    pt-3
    pr-1
    sm:pt-3
    sm:pr-2
    lg:pt-6
    lg:pr-3
    // font-family[Tahoma]
  tracking-wide
`;



const FAQSectionWrapper = tw.div`
w-full
h-auto
relative
flex
flex-col
justify-items-start
items-center
// mt-3
`;

const FAQHeaderWrapper = styled.div`
${tw`
flex
flex-col
justify-center
items-center
w-screen
h-full
relative
// -mb-20
mt-24
`};
`;

const FAQHeader = styled.div`
${tw`
flex
flex-col
justify-center
items-center
bg-contain 
bg-no-repeat
bg-opacity-0
w-[75vw]
h-[12vw]
sm:w-[50vw]
sm:h-[8vw]
// pb-1
// pr-1
`};
background-image: url(${FAQHeaderBg});
`;


const FAQMainWrapper = styled.div`
  ${tw`
flex
justify-center
items-start
bg-contain 
bg-top
bg-no-repeat
bg-opacity-0
w-[90vw]
h-[99vw]
`};
  background-image: url(${FAQMainBg});
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
`;

const FAQMainWrapperMobile = styled.div`
  ${tw`
flex
justify-center
items-start
bg-contain 
bg-top
bg-no-repeat
border-4
border-[#30e6ff]
rounded
mt-4
w-[88vw]
bg-opacity-20
bg-[#30e6ff]
`};
 
`;

const FAQMain = styled.div`
  ${tw`
justify-center
items-center
align-middle
relative
flex
flex-col
content-start
w-[70vw]
`};
`;

const FAQWrapper = styled.div`
  ${tw`
  flex
  flex-col
  justify-center
  self-center
  bg-contain 
  bg-top
  bg-no-repeat
  bg-opacity-0
  w-11/12
  rounded
  h-full
  relative
  my-8
`};
  background-image: url(${FAQBg});
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
justify-start
items-center
text-white
font-bold
text-xs
lg:text-lg
px-4
py-2
`;

export function FAQSection() {


  const matches = useMediaQuery({ minWidth: 420 });



  return (
    <FAQSectionContainer name="FAQ">
      <FAQHeaderWrapper>
     <FAQHeader><Title>FAQ</Title></FAQHeader> 
      </FAQHeaderWrapper>
      <FAQSectionWrapper>
{ matches ?
        <FAQMainWrapper>
          <FAQMain>
          <FAQWrapper>
            <Paragraph>Q:關於設計CocaineCat NFT?</Paragraph>
            <Paragraph>
              A:我們將貓高傲的神情結合男仕髮型製作成1000張NFT，CCOD由多個類別的300多個特徵生成，例如:花紋、服裝、臉型、配件、鼻子、紋身等，可產生超過400億種不同的組合，我們廣泛的特性使我們的CCOD具有不同程度的稀有性，但請放心我們並不會替他分類稀有程度，因為我們所有的CCOD都具有相同的價值，並提倡領養代替購買。
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:CCOD發行量有多少?</Paragraph>
            <Paragraph>
              A:首批NFT發行上限為1000張，公開發售940張，白名單30張，項目方保留30張，未來項目發展每次新的路線圖上限皆為1000張。
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:除了NFT還有做什麼?</Paragraph>
            <Paragraph>
              A:我們不僅僅是NFT產品，我們更努力專注於CCOD未來的實體發展，並建立一個強大的共識社群。
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:我該如何鑄造?</Paragraph>
            <Paragraph>
              A:您可以訪問我們的網站https://Cocainecat.com/連接您的 MetaMask
              錢包。 MetaMask 可以分別從 iOS、Android 和 PC 設備上的 App
              Store、Google Play 和 Chrome 擴展程序下載。{" "}
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:鑄造後我的NFT需要多長時間才能顯示?</Paragraph>
            <Paragraph>A:圖片將在鑄造後直接在官方Opensea上顯示。</Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:會有預售嗎?</Paragraph>
            <Paragraph>
              A:我們採直接公開發售的方式販售，白名單將在銷售尾聲才會被釋放，我們將很快舉行公售，請密切關注我們的
              Discord 頻道以接收有關的最新消息。
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:NFT擁有權屬於誰?</Paragraph>
            <Paragraph>
              A:一旦您擁有CCOD
              NFT，團隊將授予您在全球範圍內復制和展示所購買藝術品的許可，無論是用於個人還是商業用途，所有者都擁有其NFT的擁有權與商業使用權。{" "}
            </Paragraph>
          </FAQWrapper>
          </FAQMain>
        </FAQMainWrapper> 
:
        <FAQMainWrapperMobile>
          <FAQMain>
          <FAQWrapper>
            <Paragraph>Q:關於設計CocaineCat NFT?</Paragraph>
            <Paragraph>
              A:我們將貓高傲的神情結合男仕髮型製作成1000張NFT，CCOD由多個類別的300多個特徵生成，例如:花紋、服裝、臉型、配件、鼻子、紋身等，可產生超過400億種不同的組合，我們廣泛的特性使我們的CCOD具有不同程度的稀有性，但請放心我們並不會替他分類稀有程度，因為我們所有的CCOD都具有相同的價值，並提倡領養代替購買。
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:CCOD發行量有多少?</Paragraph>
            <Paragraph>
              A:首批NFT發行上限為1000張，公開發售940張，白名單30張，項目方保留30張，未來項目發展每次新的路線圖上限皆為1000張。
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:除了NFT還有做什麼?</Paragraph>
            <Paragraph>
              A:我們不僅僅是NFT產品，我們更努力專注於CCOD未來的實體發展，並建立一個強大的共識社群。
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:我該如何鑄造?</Paragraph>
            <Paragraph>
              A:您可以訪問我們的網站https://Cocainecat.com/連接您的 MetaMask
              錢包。 MetaMask 可以分別從 iOS、Android 和 PC 設備上的 App
              Store、Google Play 和 Chrome 擴展程序下載。{" "}
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:鑄造後我的NFT需要多長時間才能顯示?</Paragraph>            
            <Paragraph>A:圖片將在鑄造後直接在官方Opensea上顯示。</Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:會有預售嗎?</Paragraph>             
            <Paragraph>
              A:我們採直接公開發售的方式販售，白名單將在銷售尾聲才會被釋放，我們將很快舉行公售，請密切關注我們的
              Discord 頻道以接收有關的最新消息。
            </Paragraph>
          </FAQWrapper>

          <FAQWrapper>
            <Paragraph>Q:NFT擁有權屬於誰?</Paragraph>            
            <Paragraph>
              A:一旦您擁有CCOD
              NFT，團隊將授予您在全球範圍內復制和展示所購買藝術品的許可，無論是用於個人還是商業用途，所有者都擁有其NFT的擁有權與商業使用權。{" "}
            </Paragraph>
          </FAQWrapper>
          </FAQMain>
        </FAQMainWrapperMobile>
}
      </FAQSectionWrapper>
    </FAQSectionContainer>
  );
}
