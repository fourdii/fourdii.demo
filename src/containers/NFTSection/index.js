import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/Navbar";
import { Link } from "react-scroll";
import { BsArrowDownCircle, BsCartCheck } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import config from "../.././config.json";

import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

import NftBuyBg from "../../images/nftBuy.png";
import NftInfoBg from "../../images/nftInfo.png";

import AmountFrameBg from "../../images/amountFrame.png";
import MinusButtonBg from "../../images/minusButton.png";
import PlusButtonBg from "../../images/plusButton.png";
import ConnectMintButtonBg from "../../images/connectMintButton.png";
import NftBuyFrontBg from "../../images/nftBuyFront.png";

const NFTSectionContainer = styled.div`
  ${tw`
  w-full
  h-auto
    flex
    flex-col
    relative
  `};
`;

const NFTSectionWrapper = styled.div`
  ${tw`
  w-full
  h-auto
  relative
  flex
  flex-col
  justify-center
  items-center
    `};
`;

// const MintContainer = styled.div`

//   ${tw`
//     //   w-full
//       flex
//       flex-col
//       relative
//       justify-center
//       items-center
//       self-center
//       bg-gray-500
//       rounded-2xl
//       border-2
//       border-gray-200
//       py-5
//       border-opacity-50
//       w-2/3

//       md:w-1/2
//       lg:w-1/3
//       xl:w-1/4
//     `};
// `;

const Counter = styled.h1`
  ${tw`
       text-3xl
       text-white
       text-shadow[#fff 1px 0 10px;]   
      font-bold
       my-2
    `};
`;

const ContractLink = styled.button`
  ${tw`
       bg-[#04f79b]
       text-shadow[#000 1px 0 10px;]
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
       text-lg
       my-2
       text-[#04f79b]
       font-bold    `};
`;

const ContractInfo = styled.p`
  ${tw`
       font-bold
       text-sm
       my-2
       text-white
       text-shadow[#fff 1px 0 10px;]
       px-2       
    `};
`;

const DynamicInfo = styled.p`
  ${tw`
       text-[#04f79b]
       text-shadow[#fff 1px 0 10px;]   
      font-bold
       text-sm
       my-2
       px-2
    `};
`;

// const Button = styled.button`
//   ${tw`
//     bg-blue-800
//     hover:text-gray-300
//     rounded-full
//     text-white
//     font-bold
//     text-sm
//     px-5
//     py-2
//     self-center
//     my-2
//     // bg-gradient-to-r from-blue-800 via-purple-500 to-yellow-500
//     disabled:bg-gray-600
//     disabled:text-gray-500
//     `};
// `;

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

// const InputWrapper = styled.div`
//   ${tw`
//        flex
//        flex-row
//        flex-nowrap
// `};
// `;

// const InputButton = styled.button`
//   ${tw`
//        rounded-full
//        text-white
//        hover:text-gray-300
//        px-3
//        py-2
//        mx-4
// `};
// `;

const NftMintWrapper = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-cover 
bg-top
bg-no-repeat
bg-opacity-0
-mb-2
w-screen
h-[50vw]
`};
  background-image: url(${NftBuyBg});

  // width: 100vw;
  // height: 35.05vw;
`;

const NftInfoWrapper = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-cover 
bg-center
bg-no-repeat
bg-opacity-0
w-screen

`};
  background-image: url(${NftInfoBg});
  // -moz-background-size: 100% 100%;
  //   -webkit-background-size: 100% 100%;
  //   background-size: 100% 100%;
  // width: 100vw;
  // height: 46.7vw;
`;

const ConnectMintButtonWrapper = styled.button`
  ${tw`
  flex
  flex-row
  flex-nowrap
  justify-center
  items-center
  w-[50vw]
  h-[13.8vw]
  bg-cover
  bg-no-repeat
  bg-opacity-0
  z-0
`};
  background-image: url(${NftBuyFrontBg});
`;

const ConnectMintButton = styled.button`
  ${tw`
  bg-opacity-0
  h-[4.95vw]
  w-[25vw]
  bg-cover
  bg-no-repeat
  z-10
  text-white
  font-bold
  text-shadow[#000 1px 0 10px;]
`};
  background-image: url(${ConnectMintButtonBg});
`;

const InputWrapperNew = styled.div`
  ${tw`
  w-full
  h-1/3
  flex
  flex-row
  flex-nowrap
  justify-center
  items-center
  `};
`;

const PlusButton = styled.button`
  ${tw`
  bg-opacity-0
  h-[40px]
  w-[40px]
  sm:h-[60px]
  sm:w-[60px]
  md:h-[70px]
  md:w-[70px]
  lg:h-[80px]
  lg:w-[80px]
  bg-cover
  bg-no-repeat
  z-20
`};
  background-image: url(${PlusButtonBg});
`;

const MinusButton = styled.button`
  ${tw`
bg-opacity-0
h-[40px]
w-[40px]
sm:h-[60px]
sm:w-[60px]
md:h-[70px]
md:w-[70px]
lg:h-[80px]
lg:w-[80px]
bg-cover
bg-no-repeat
z-20
`};
  background-image: url(${MinusButtonBg});
`;

const AmountFrame = styled.div`
  ${tw`
  bg-opacity-0
  h-[80px]
  w-[118px]
  bg-cover
  bg-no-repeat
  flex
  flex-row
  items-center
  justify-center 
`};
  background-image: url(${AmountFrameBg});
`;

const InfoWrapper = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
  justify-center
  items-center
  p-44
`};
`;

const InfoTitle = styled.div`
  ${tw`
  text-white
  text-3xl

  font-bold
  pb-2
  w-screen
  flex
  flex-row
  flex-nowrap
  justify-center
`};
`;

const InfoContent = styled.div`
  ${tw`
  text-white
  text-lg

  font-bold
  pt-2
  pb-12
  w-[90vw]
`};
`;

export function NFTSection() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(
    `Click button below to mint your NFT.`
  );
  const [mintAmount, setMintAmount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mintCost, setMintCost] = useState(1);
  const [displayCost, setDisplayCost] = useState(1);
  const [isInWhitelist, setIsInWhitelist] = useState(false);
  const [remainSupply, setRemainSupply] = useState(0);
  const [whitelistMintEnabled, setWhitelistMintEnabled] = useState(false);

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
    setLoading(true);
    let cost = mintCost;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    try {
      if (whitelistMintEnabled) {
        console.log("White Mint");

        blockchain.smartContract.methods
          .wMintNFT()
          .send({
            gasLimit: String(gasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: cost,
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Something went wrong please try again.");
            setClaimingNft(false);
            setLoading(false);
          })
          .then((receipt) => {
            console.log(receipt);
            setFeedback(`The ${CONFIG.NFT_NAME} is yours!`);
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
            setLoading(false);
          });
      } else {
        console.log("Mint");
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
            setLoading(false);
          })
          .then((receipt) => {
            console.log(receipt);
            setFeedback(`The ${CONFIG.NFT_NAME} is yours!`);
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
            setLoading(false);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function CheckWhiteListMint() {
    let isInWhitelist = await blockchain.smartContract.methods
      .isInWhiteList(blockchain.account)
      .call();
    let remainSupply = await blockchain.smartContract.methods
      .remainSupply()
      .call();
    let mintCost = await blockchain.smartContract.methods.mintPrice().call();
    let mintDisplayCost = blockchain.web3.utils.fromWei(mintCost, "ether");
    let wMintCost = await blockchain.smartContract.methods.wMintPrice().call();
    let wMintDisplayCost = blockchain.web3.utils.fromWei(wMintCost, "ether");

    setIsInWhitelist(isInWhitelist);
    setRemainSupply(remainSupply);

    console.log(isInWhitelist);
    console.log(remainSupply);

    if (remainSupply <= 10 && isInWhitelist) {
      document.getElementById("mintButton").disabled = false;
      document.getElementById("mintButton").innerHTML = "WHITELIST MINT";
      document.getElementById("message").innerHTML = "WhiteList Mint Enabled.";
      setMintCost(wMintCost);
      setDisplayCost(wMintDisplayCost);
      setWhitelistMintEnabled(true);
    } else if (remainSupply <= 10 && !isInWhitelist) {
      document.getElementById("mintButton").disabled = true;
      document.getElementById("mintButton").innerHTML = "MINT DISABLED";
      document.getElementById("message").innerHTML =
        "WhiteList Mint is only for specific address.";
      setMintCost(wMintCost);
      setDisplayCost(wMintDisplayCost);
      setWhitelistMintEnabled(true);
    } else {
      document.getElementById("mintButton").disabled = false;
      document.getElementById("mintButton").innerHTML = "MINT";
      setMintCost(mintCost);
      setDisplayCost(mintDisplayCost);
      setWhitelistMintEnabled(false);
    }
  }

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1 || whitelistMintEnabled) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;

    if (whitelistMintEnabled) {
      newMintAmount = 1;
    } else if (newMintAmount >= remainSupply) {
      newMintAmount = remainSupply;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      CheckWhiteListMint();
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
    <NFTSectionContainer name="NFT">
      <NFTSectionWrapper id="NFTSectionWrapper">
        <NftMintWrapper id="NftMintWrapper">
          <Counter>
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </Counter>

          <ContractLink>
            <a href={CONFIG.SCAN_LINK} target="_blank">
              {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
            </a>
          </ContractLink>

          {remainSupply !== 0 && (
            <ContractInfo>
              {mintAmount} {CONFIG.SYMBOL} costs{" "}
              {(displayCost * mintAmount).toFixed(6)} {CONFIG.NETWORK.SYMBOL}.
            </ContractInfo>
          )}
          {remainSupply !== 0 && (
            <ContractInfo id="message">Excluding gas fees.</ContractInfo>
          )}
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <ConnectorWrapper>
              <DynamicInfo
                style={{
                  textAlign: "center",
                  color: "var(--accent-text)",
                }}
              >
                Connect to the {CONFIG.NETWORK.NAME} network
              </DynamicInfo>
              <ConnectMintButtonWrapper>
                <ConnectMintButton
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}
                >
                  CONNECT
                </ConnectMintButton>
              </ConnectMintButtonWrapper>
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
              {/* <DynamicInfo>
                      {feedback}
                    </DynamicInfo>                    */}
              <ConnectMintButtonWrapper>
                <ConnectMintButton
                  id="mintButton"
                  disabled={claimingNft ? 1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    claimNFTs();
                    getData();
                  }}
                >
                  MINT
                </ConnectMintButton>
              </ConnectMintButtonWrapper>
              <InputWrapperNew>
                <MinusButton
                  disabled={claimingNft ? 1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    decrementMintAmount();
                  }}
                ></MinusButton>
                <AmountFrame>
                  <Quantity>{mintAmount}</Quantity>
                </AmountFrame>
                <PlusButton
                  disabled={claimingNft ? 1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    incrementMintAmount();
                  }}
                ></PlusButton>
              </InputWrapperNew>
            </>
          )}
        </NftMintWrapper>
        <NftInfoWrapper>
          <InfoWrapper>
            <InfoTitle>About CocaineCat</InfoTitle>
            <InfoContent>
              CocaineCat是一群被拋棄在太空的貓咪，長期受到宇宙輻射後發生了突變，他們以古怪的風格模仿人類的生態與生活方式，適應生存在各星球上。密切關注我們的CocaineCat，貓咪們會繼續探索人類無法觸及的未知領域。
            </InfoContent>
          </InfoWrapper>
        </NftInfoWrapper>
      </NFTSectionWrapper>
    </NFTSectionContainer>
  );
}

