import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { TopSection  } from "./containers/TopSection";
import { AboutSection  } from "./containers/AboutSection";
import { Footer } from "./components/footer";
import BackgroundImage from "./images/bg.png"
import styled from "styled-components";
import { RoadmapSection } from "./containers/RoadmapSection";
import { TeamSection } from "./containers/TeamSection";
import { FAQSection } from "./containers/FAQSection";
import { NFTSection } from "./containers/NFTSection";


// const AppContainer = tw.div`
//     flex
//     flex-col
//     w-full
//     h-full
//     overflow-hidden
// `;


const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-auto
    overflow-x-hidden
    overflow-y-auto
    `};
  background-image: url(${BackgroundImage});
  background-size: cover;
`;



function App() {
  return (
    <AppContainer>
      {/* <iframe className="w-screen h-screen overflow-hidden" src="https://fengchen313.wixsite.com/my-site-1?siteRevision=176" title="W3Schools Free Online Web Tutorials"></iframe> */}
      <TopSection/>
      <NFTSection/>
      <RoadmapSection/>
      <TeamSection/>
      <AboutSection/>
      <FAQSection/>
      {/* <Footer/>   */}
    </AppContainer>
  );
}

export default App;
