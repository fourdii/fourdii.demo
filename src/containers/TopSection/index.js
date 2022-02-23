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
        justify-between
    `};
  background-image: url(${BackgroundImage}),
  linear-gradient(to left, #005b9c, #b1d1b148);
  background-size: cover;
  background-position: bottom 10% left;
  background-blend-mode: overlay;
`;


const ViewMoreButton = styled.button`
  ${tw`
        // absolute
        bottom-4
        // left-1/2
        // -translate-x-1/2
        text-white
        text-4xl
        transition-colors
        duration-200
        hover:text-yellow-500       
    `};
`;

const ViewMoreButtonWrapper = styled.div`
  ${tw`
       w-full
       flex
       flex-row
       justify-center
       items-center   
       self-center 
       pb-2
    `};
`;

const MintContainer = styled.div`
 
  ${tw`
    //   w-full
      flex
      flex-col
      relative 
      justify-center
      items-center
      self-center
      bg-gray-500
      rounded-2xl
      border-2
      border-gray-200
      py-5
      border-opacity-50
      w-2/3
      
      md:w-1/2
      lg:w-1/3
      xl:w-1/4
    `};
`;

const Counter = styled.h1`
  ${tw`
       text-3xl
       text-white
       font-bold
       my-2
    `};
`;

const ContractLink = styled.button`
  ${tw`
       bg-gray-600
       hover:text-gray-300
       rounded-full
       text-white
       font-bold
       text-sm
       px-6
       py-2
       my-2
    `};
`;

const Quantity = styled.p`
  ${tw`
       font-bold
       text-lg
       my-2
       text-white
    `};
`;

const ContractInfo = styled.p`
  ${tw`
       font-bold
       text-sm
       my-2
       text-white
    `};
`;

const DynamicInfo = styled.p`
  ${tw`
       text-white
       font-bold
       text-sm
       my-2
    `};
`;

const Button = styled.button`
  ${tw`
    bg-black
    hover:text-gray-300
    rounded-full
    text-white
    font-bold
    text-sm
    px-5
    py-2
    self-center
    my-2
    bg-gradient-to-r from-blue-800 via-purple-500 to-yellow-500
    `};
`;


const ConnectorWrapper = styled.div`
  ${tw`
       flex
       flex-col
       justify-center
       self-center
       items-center
       text-white
`};
`;

const InputWrapper = styled.div`
  ${tw`
       flex
       flex-row
       flex-nowrap       
`};
`;

const InputButton = styled.button`
  ${tw`
       rounded-full
       text-white
       hover:text-gray-300
       px-3
       py-2   
       mx-4
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
          setFeedback("Something went wrong please try again.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `The ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
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

      <MintContainer>           
            <Counter>
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </Counter>

            <ContractLink>
              <a href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </a>
            </ContractLink>
            
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
                <ContractInfo>
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </ContractInfo>
                <ContractInfo>
                  Excluding gas fees.
                </ContractInfo>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <ConnectorWrapper>
                    <DynamicInfo
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </DynamicInfo>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </Button>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <DynamicInfo
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </DynamicInfo>
                      </>
                    ) : null}
                  </ConnectorWrapper>
                ) : (
                  <>
                    <DynamicInfo>
                      {feedback}
                    </DynamicInfo>
                    <InputWrapper>
                      <InputButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </InputButton>
                      <Quantity                       
                      >
                        {mintAmount}
                      </Quantity>
                      <InputButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </InputButton>
                    </InputWrapper>
                    <div>
                      <Button
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}
      </MintContainer> 

     <ViewMoreButtonWrapper>
      <ViewMoreButton>
        <Link to="About" smooth={"easeInOutQuad"} duration={1500}>
          <BsArrowDownCircle />
        </Link>
      </ViewMoreButton>
      </ViewMoreButtonWrapper>
    </LandingSection>
  </TopSectionContainer>
  );
};



