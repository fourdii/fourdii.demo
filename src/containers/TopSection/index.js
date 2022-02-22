import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/Navbar"; 
import BackgroundImage from "../../images/bg.jpeg";
import { Link } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import config from "../.././config.json";


const TopSectionContainer = styled.div`
  ${tw`
     w-full
     flex
     flex-col
     h-screen
     relative 
  `};
`;

const LandingSection = styled.div`
  ${tw`
        w-full
        h-screen
        flex
        flex-col
    `};
  background-image: url(${BackgroundImage}),
    linear-gradient(to left, #005b9c, #b1d1b148);
  background-size: cover;
  background-position: bottom 10% left;
  background-blend-mode: overlay;
`;

const InfoSection = styled.div`
  ${tw`
        absolute
        top[150px]
        left-3
        lg:top[150px]
        lg:right-10
        lg:left-auto
        2xl:right-60
        2xl:top[240px]
        2xl:left-auto
    `};
`;

const FloatingText = styled.h1`
  ${tw`
        m-0
        font-black
        text-white
        font-size[60px]
        line-height[25px]
        lg:font-size[125px]
        lg:line-height[90px]
        2xl:font-size[170px]
        2xl:line-height[125px]
        font-family["Archivo Narrow"]
        flex
        items-center
    `};
`;

const OutlinedTextSvg = styled.svg`
  font: bold 100px Century "Archivo Narrow", Arial;
  ${tw`
        width[550px]
        height[100px]
        lg:width[580px]
        lg:height[110px]
        2xl:width[550px]
        2xl:height[110px]
        flex
    `};
  overflow: overlay;
  text {
    max-height: 100%;
    flex: 1;
    fill: none;
    stroke: white;
    stroke-width: 2px;
    stroke-linejoin: round;
    z-index: 99;
    ${tw`
      2xl:transform[translateY(113px)]
      lg:transform[translateY(97px)]
      transform[translateY(71px)]
    `};
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
  }
`;

const DescriptionText = styled.p`
  ${tw`
        text-xl
        lg:text-lg
        text-white
        text-opacity-80
        mt-10
        max-w-xs
        lg:max-w-lg
        2xl:max-w-xl
    `};
`;

const ViewMoreButton = styled.button`
  ${tw`
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-white
        text-4xl
        transition-colors
        duration-200
        hover:text-green-400
    `};
`;


export function TopSection() {

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    });

    const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;
  
    const claimNFTs = () => {
      let cost = CONFIG.WEI_COST;
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(cost * mintAmount);
      let totalGasLimit = String(gasLimit * mintAmount);
      console.log("Cost: ", totalCostWei);
      console.log("Gas limit: ", totalGasLimit);
      setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
      setClaimingNft(true);
      blockchain.smartContract.methods
        .mintNFT(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
  
    const decrementMintAmount = () => {
      let newMintAmount = mintAmount - 1;
      if (newMintAmount < 1) {
        newMintAmount = 1;
      }
      setMintAmount(newMintAmount);
    };
  
    const incrementMintAmount = () => {
      let newMintAmount = mintAmount + 1;
      if (newMintAmount > 10) {
        newMintAmount = 10;
      }
      setMintAmount(newMintAmount);
    };
  
    const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    const getConfig = () => {
      // const configResponse = await fetch("/config/config.json", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // });
      // const config = await configResponse.json();
      SET_CONFIG(config);
    };
  
    useEffect(() => {
      getConfig();
    }, []);
  
    useEffect(() => {
      getData();
    }, [blockchain.account]);




  return (
    <TopSectionContainer>
    <LandingSection>
      <NavBar />
      <InfoSection>

      <div>           
            <div>
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </div>
            <div>
              <a href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </a>
            </div>
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <div>
                  The sale has ended.
                </div>
                <div>
                  You can still find {CONFIG.NFT_NAME} on
                </div>
                <a href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </a>
              </>
            ) : (
              <>
                <div>
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </div>
                <div>
                  Excluding gas fees.
                </div>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <div>
                    <div
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </button>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </div>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <>
                    <div>
                      {feedback}
                    </div>
                    <div>
                      <button
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </button>
                      <div
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </div>
                      <button
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
      </div> 

        {/* <FloatingText>World</FloatingText>
        <FloatingText style={{ display: "inline-flex" }}>
          OF         
        </FloatingText>

        <FloatingText>INDONESIA.</FloatingText>

        <DescriptionText>
          Let's explore of the third largest countries in the world, namely
          indonesia. Enjoy 3 vacation packages at competitive prices and
          strong soul.
        </DescriptionText> */}

      </InfoSection>

      <ViewMoreButton>
        <Link to="About" smooth={"easeInOutQuad"} duration={1500}>
          <BsArrowDownCircle />
        </Link>
      </ViewMoreButton>

    </LandingSection>
  </TopSectionContainer>
  );
};


//   <div>
//         <div>        
//           <div>           
//             <div>
//               {data.totalSupply} / {CONFIG.MAX_SUPPLY}
//             </div>
//             <div>
//               <a href={CONFIG.SCAN_LINK}>
//                 {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
//               </a>
//             </div>
//             {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
//               <>
//                 <div>
//                   The sale has ended.
//                 </div>
//                 <div>
//                   You can still find {CONFIG.NFT_NAME} on
//                 </div>
//                 <a href={CONFIG.MARKETPLACE_LINK}>
//                   {CONFIG.MARKETPLACE}
//                 </a>
//               </>
//             ) : (
//               <>
//                 <div>
//                   1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
//                   {CONFIG.NETWORK.SYMBOL}.
//                 </div>
//                 <div>
//                   Excluding gas fees.
//                 </div>
//                 {blockchain.account === "" ||
//                 blockchain.smartContract === null ? (
//                   <div>
//                     <div
//                       style={{
//                         textAlign: "center",
//                         color: "var(--accent-text)",
//                       }}
//                     >
//                       Connect to the {CONFIG.NETWORK.NAME} network
//                     </div>
//                     <button
//                       onClick={(e) => {
//                         e.preventDefault();
//                         dispatch(connect());
//                         getData();
//                       }}
//                     >
//                       CONNECT
//                     </button>
//                     {blockchain.errorMsg !== "" ? (
//                       <>
//                         <div
//                           style={{
//                             textAlign: "center",
//                             color: "var(--accent-text)",
//                           }}
//                         >
//                           {blockchain.errorMsg}
//                         </div>
//                       </>
//                     ) : null}
//                   </div>
//                 ) : (
//                   <>
//                     <div>
//                       {feedback}
//                     </div>
//                     <div>
//                       <button
//                         disabled={claimingNft ? 1 : 0}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           decrementMintAmount();
//                         }}
//                       >
//                         -
//                       </button>
//                       <div
//                         style={{
//                           textAlign: "center",
//                           color: "var(--accent-text)",
//                         }}
//                       >
//                         {mintAmount}
//                       </div>
//                       <button
//                         disabled={claimingNft ? 1 : 0}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           incrementMintAmount();
//                         }}
//                       >
//                         +
//                       </button>
//                     </div>
//                     <div>
//                       <button
//                         disabled={claimingNft ? 1 : 0}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           claimNFTs();
//                           getData();
//                         }}
//                       >
//                         {claimingNft ? "BUSY" : "BUY"}
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </div>      
//         </div>    
//       </div> 