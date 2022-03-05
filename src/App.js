import React from "react";
import tw from "twin.macro";
import { TopSection  } from "./containers/TopSection";
import { AboutSection  } from "./containers/AboutSection";
import BackgroundImage from "./images/bg.png"
import styled from "styled-components";
import { RoadmapSection } from "./containers/RoadmapSection";
import { TeamSection } from "./containers/TeamSection";
import { FAQSection } from "./containers/FAQSection";
import { NFTSection } from "./containers/NFTSection";



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
      <TopSection/>
      <NFTSection/>
      <RoadmapSection/>
      <TeamSection/>
      <AboutSection/>
      <FAQSection/>
    </AppContainer>
  );
}

export default App;
