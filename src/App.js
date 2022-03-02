import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { connect } from "./redux/blockchain/blockchainActions";
// import { fetchData } from "./redux/data/dataActions";
// import config from "./config.json";
import tw from "twin.macro";
import { TopSection  } from "./containers/TopSection";
import { AboutSection  } from "./containers/AboutSection";
import { Footer } from "./components/footer";


const AppContainer = tw.div`
    flex
    flex-col
    w-full
    h-full
    overflow-hidden
`;


function App() {
  return (
    <AppContainer>
      {/* <iframe className="w-screen h-screen overflow-hidden" src="https://fengchen313.wixsite.com/my-site-1?siteRevision=176" title="W3Schools Free Online Web Tutorials"></iframe> */}
      <TopSection/>
      <AboutSection/>
      <Footer/>  
    </AppContainer>
  );
}

export default App;
