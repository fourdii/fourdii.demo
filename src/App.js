import React from "react";
import tw from "twin.macro";
// import { TopSection  } from "./containers/TopSection";
import { AboutSection  } from "./containers/AboutSection";
import BackgroundImage from "./images/bg.png"
import styled from "styled-components";
import { RoadmapSection } from "./containers/RoadmapSection";
import { TeamSection } from "./containers/TeamSection";
import { FAQSection } from "./containers/FAQSection";
import { NFTSection } from "./containers/NFTSection";
import { NavBar } from "./components/Navbar";



const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-auto           
    bg-cover
    bg-local
    bg-opacity-0
    // overflow-x-hidden
    // overflow-y-auto
    `};
    background-image: url(${BackgroundImage});
`;



function App() {
  return (
    <AppContainer>
      {/* <TopSection/> */}
      <NavBar/>
      <NFTSection/>
      <RoadmapSection/>
      <TeamSection/>
      <AboutSection/>
      <FAQSection/>
    </AppContainer>
  );
}

export default App;
