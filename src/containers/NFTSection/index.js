import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import config from "../.././config.json";
// import NftBuyBg from "../../images/nftBuy.png";
import NftInfoBg from "../../images/nftInfo.png";
import AmountFrameBg from "../../images/amountFrame.png";
import MinusButtonBg from "../../images/minusButton.png";
import PlusButtonBg from "../../images/plusButton.png";
import ConnectMintButtonBg from "../../images/connectMintButton.png";
import NftBuyFrontBg from "../../images/nftBuyFront.png";
import TopCatsBg from "../../images/topcats.png";
import TopTextBg from "../../images/toptext.png";
import TopPlanetsBg from "../../images/topplanets.png";
import TopBackgroundBg from "../../images/topbg.png";

import { useMediaQuery } from "react-responsive";

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

  bg-cover 
bg-center
bg-no-repeat
bg-opacity-0
    `};
 
`;

const Counter = styled.h1`
  ${tw`
       text-6xl
       text-white
       text-shadow[#fff 1px 0 10px;]   
      font-bold
      my-4
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
       text-lg
       px-10
      py-2
      mb-2
      
    `};
`;

const Quantity = styled.p`
  ${tw`
       text-lg
       text-[#04f79b]
       font-bold    
       `};
`;

const ContractInfo = styled.p`
  ${tw`
       font-bold
       text-xl
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
      text-lg
       xs:text-2xl
       px-2
       mb-2
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

const NftInfoWrapper = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-cover 
bg-bottom
bg-no-repeat
bg-opacity-0
w-screen
border-t-2
border-white
`};
  background-image: url(${NftInfoBg});
`;

const ConnectMintButtonWrapper = styled.div`
  ${tw`
  flex
  flex-row
  flex-nowrap
  justify-center
  items-center
  w-screen
  h-[10.35vw]
  sm:w-[75vw]
  sm:h-[20.7vw]
  bg-cover
  bg-no-repeat
  bg-opacity-0
`};
  // background-image: url(${NftBuyFrontBg});
`;

const ConnectMintButton = styled.button`
  ${tw`
  bg-opacity-0
  h-[9.9vw]
  w-[50vw]
  hover:text-gray-300
  sm:h-[4.95vw]
  sm:w-[25vw]
  bg-cover
  bg-no-repeat
  text-white
  font-bold
  text-lg
  sm:text-xl
  // md:text-2xl
  lg:text-3xl
  text-shadow[#000 1px 0 10px;]
  // font-family[Tahoma]
  tracking-wide
`};
  background-image: url(${ConnectMintButtonBg});
`;

const InputWrapperNew = styled.div`
  ${tw`
  w-full
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
h-[10vw]
w-[10vw]
sm:h-[7.5vw]
sm:w-[7.5vw]
  bg-cover
  bg-no-repeat
`};
  background-image: url(${PlusButtonBg});
`;

const MinusButton = styled.button`
  ${tw`
bg-opacity-0
h-[10vw]
w-[10vw]
sm:h-[7.5vw]
sm:w-[7.5vw]
bg-cover
bg-no-repeat
`};
  background-image: url(${MinusButtonBg});
`;

const AmountFrame = styled.div`
  ${tw`
  bg-opacity-0
  h-[10vw]
  w-[13.72vw]
  sm:h-[7.5vw]
  sm:w-[10.29vw]
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
  text-shadow[#fff 1px 0 10px;]   
  text-white
  text-xl
  sm:text-3xl
  font-bold
  text-center
  pb-4
  w-screen
  flex
  flex-row
  flex-nowrap
  justify-center
  // font-family[Tahoma]
  tracking-wide
  
`};
`;

const InfoContent = styled.div`
  ${tw`
  text-white
  text-sm
  sm:text-lg
  font-bold
  pb-12
  w-[60vw]
  //font-family[MSJH]
  tracking-wide
  justify-center
  items-center
  content-center
  text-center
  flex
  flex-row
  flex-wrap
`};
`;

const TopBg = styled.div`
  ${tw`
flex
flex-col
lg:flex-row
justify-center
items-center
bg-cover 
bg-center
bg-repeat
bg-opacity-0
// w-full
// h-auto
w-full
h-[100vh]
lg:w-[100vw]
lg:h-[90vh]
relative
`};
   background-image: url(${TopBackgroundBg});
`;

const NftMintWrapper = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
w-full
h-[40vh]

lg:w-[40vw]
`};
`;

const TopTextWrapper = styled.div`
  ${tw`
  flex
  flex-col
  items-center 
  // w-full
  // h-[30vh]
  // pt-6
  // lg:pt-44
// w-[100vw]
// h-[42.4vw]
lg:w-[60vw]
lg:h-[45vh]
relative
pt-36
`};
`;

const TopText = styled.div`
  ${tw`
flex
flex-col
justify-center
items-center
bg-contain 
bg-center
bg-no-repeat
bg-opacity-0
w-[50vw]
h-[21.2vw]
relative
`};
  background-image: url(${TopTextBg});
`;

const TopCatsWrapper = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  lg:flex-row-reverse
  lg:items-end
relative
// w-full
// h-[30vh]
lg:w-[60vw]
lg:h-[45vh]
`};
  // background-image: url(${TopCatsBg});
`;

const TopCats = styled.div`
  ${tw`
items-center
bg-contain
bg-bottom
bg-no-repeat
bg-opacity-100
relative
w-[100vw]
h-[23.97vw]

//h-[28.97vw]
`};
  background-image: url(${TopCatsBg});
`;

const TopPlanets = styled.div`
  ${tw`
flex
flex-col
flex-nowrap
lg:flex-wrap
justify-between
lg:justify-center
items-center
bg-contain 
bg-center
bg-no-repeat
bg-opacity-0
w-full
h-[100vh]
relative
`};
  background-image: url(${TopPlanetsBg});
`;

export function NFTSection() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click button below to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mintCost, setMintCost] = useState(1);
  const [displayCost, setDisplayCost] = useState(1);
  const [isInWhitelist, setIsInWhitelist] = useState(false);
  const [remainSupply, setRemainSupply] = useState(0);
  const [whitelistMintEnabled, setWhitelistMintEnabled] = useState(false);
  const [maxSupply, setMaxSupply] = useState(1000);
  const [currentWhiteTotal, setCurrentWhiteTotal] = useState(0);


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
    // MAX_SUPPLY: 1,
    // WEI_COST: 0,
    // DISPLAY_COST: 0,
    WHITE_MINT_SUPPLY: 0,
    GAS_LIMIT: 0,
    // MARKETPLACE: "",
    // MARKETPLACE_LINK: "",
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
    let IsInWhitelist = await blockchain.smartContract.methods
      .isInWhiteList(blockchain.account)
      .call();

      setIsInWhitelist(IsInWhitelist);

    let RemainSupply = await blockchain.smartContract.methods
      .remainSupply()
      .call();

      let remainSupply = parseInt(RemainSupply);     
      setRemainSupply(remainSupply);


    let CurrentWhiteTotal = await blockchain.smartContract.methods
      .currentWhiteTotal()
      .call();

      let currentWhiteTotal = parseInt(CurrentWhiteTotal);     
      setCurrentWhiteTotal(parseInt(currentWhiteTotal));

    let MaxSupply = await blockchain.smartContract.methods.MAX_SUPPLY().call();

    let maxSupply = parseInt(MaxSupply);     
    setMaxSupply(parseInt(maxSupply));

    let mintCost = await blockchain.smartContract.methods.mintPrice().call();
    let mintDisplayCost = blockchain.web3.utils.fromWei(mintCost, "ether");
    let wMintCost = await blockchain.smartContract.methods.wMintPrice().call();
    let wMintDisplayCost = blockchain.web3.utils.fromWei(wMintCost, "ether");


    if(remainSupply <= currentWhiteTotal) {

      if(IsInWhitelist)
      {
      document.getElementById("mintButton").disabled = false;
      document.getElementById("mintButton").innerHTML = "WHITELIST MINT";
      document.getElementById("message").innerHTML = "WhiteList Mint Enabled.";
      setMintCost(wMintCost);
      setDisplayCost(wMintDisplayCost);
      setWhitelistMintEnabled(true);
      }
      else
      {
        document.getElementById("mintButton").disabled = true;
        document.getElementById("mintButton").innerHTML = "MINT DISABLED";
        document.getElementById("message").innerHTML =
          "WhiteList Mint is only for specific address.";
        setMintCost(wMintCost);
        setDisplayCost(wMintDisplayCost);
        setWhitelistMintEnabled(true);
      }
    }    
    else {
      console.log("MINT");
      document.getElementById("mintButton").disabled = false;
      document.getElementById("mintButton").innerHTML = "MINT";
      setMintCost(mintCost);
      setDisplayCost(mintDisplayCost);
      setWhitelistMintEnabled(false);
    }
  

    // else if(remainSupply <= currentWhiteTotal && !isInWhitelist) {
    //   console.log(isInWhitelist);
    //   console.log(remainSupply);
    //   console.log(currentWhiteTotal);
    //   console.log("MINT DISABLED");

    //   document.getElementById("mintButton").disabled = true;
    //   document.getElementById("mintButton").innerHTML = "MINT DISABLED";
    //   document.getElementById("message").innerHTML =
    //     "WhiteList Mint is only for specific address.";
    //   setMintCost(wMintCost);
    //   setDisplayCost(wMintDisplayCost);
    //   setWhitelistMintEnabled(true);
    // }
   
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

  const getData = async () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      console.log('get data');
      dispatch(fetchData(blockchain.account));
      await CheckWhiteListMint();
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

  const isMobile = useMediaQuery({ maxWidth: 1024 });




 


  return (
    <NFTSectionContainer name="NFT">
      <NFTSectionWrapper>
        {isMobile ? (
          <TopBg>
            <TopPlanets>
              <TopTextWrapper>
                <TopText></TopText>
              </TopTextWrapper>
              <NftMintWrapper>
                <Counter>
                  {data.totalSupply} / {maxSupply}
                </Counter>

                <ContractLink>
                  <a href={CONFIG.SCAN_LINK} target="_blank" rel="noreferrer">
                    {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                  </a>
                </ContractLink>

                {remainSupply !== 0 && (
                  <ContractInfo>
                    {mintAmount} {CONFIG.SYMBOL} costs{" "}
                    {(displayCost * mintAmount).toFixed(6)}{" "}
                    {CONFIG.NETWORK.SYMBOL}.
                  </ContractInfo>
                )}
                {remainSupply !== 0 && (
                  <ContractInfo id="message">Excluding gas fees.</ContractInfo>
                )}
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
              <TopCatsWrapper>
                <TopCats></TopCats>
              </TopCatsWrapper>
            </TopPlanets>
          </TopBg>
        ) : (
          <TopBg>
            <TopPlanets>
              <TopTextWrapper>
                <TopText></TopText>
              </TopTextWrapper>
              <TopCatsWrapper>
                <TopCats></TopCats>
              </TopCatsWrapper>
            </TopPlanets>
            <NftMintWrapper>
              <Counter>
              {data.totalSupply} / {maxSupply}
              </Counter>

              <ContractLink>
                <a href={CONFIG.SCAN_LINK} target="_blank" rel="noreferrer">
                  {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                </a>
              </ContractLink>

              {remainSupply !== 0 && (
                <ContractInfo>
                  {mintAmount} {CONFIG.SYMBOL} costs{" "}
                  {(displayCost * mintAmount).toFixed(6)}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </ContractInfo>
              )}
              {remainSupply !== 0 && (
                <ContractInfo id="message">Excluding gas fees.</ContractInfo>
              )}
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
          </TopBg>
        )}

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
