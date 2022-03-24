import React from "react";
import tw from "twin.macro";
import { TopSection  } from "./containers/TopSection";
import  { GlassBox }   from "./containers/GlassBox";


import styled from "styled-components";
import { NavBar } from "./components/Navbar";



const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-full           
    overflow-x-hidden
    overflow-y-scroll
    `};
`;



function App() {
  return (
    <AppContainer>
      <NavBar />
      {/* <GlassBox/> */}
      <TopSection />
    </AppContainer>
  );
}

export default App;
