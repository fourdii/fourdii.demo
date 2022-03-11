import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import { useDispatch, useSelector } from "react-redux";
// import { connect } from "../../redux/blockchain/blockchainActions";
// import { fetchData } from "../../redux/data/dataActions";
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
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";


// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import contract from "../../abi.json";
import config from "../../config.json";


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
       text-5xl
       text-white
       text-shadow[#fff 1px 0 10px;]   
      font-bold
     my-2
     flex
     justify-center
     font-Source
    `};
`;

const ContractLinkWrapper = styled.div`
  ${tw`
      //  bg-[#04f79b]
       rounded-full
      // px-1
      // py-2
      // mb-2
      // my-2
      flex
      justify-center
    `};
`;

const ContractLink = styled.button`
  ${tw`
      //  bg-[#04f79b]
       text-shadow[#000 1px 0 10px;]
       hover:text-gray-300
       rounded-full
       text-white
       font-bold
       text-lg
      // px-1
      // py-2
      // mb-2
      w-[250px]
      h-[40px]
      bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500
      // my-2
      flex
      justify-center
      items-center
      font-Source

    `};
`;

const Quantity = styled.p`
  ${tw`
       text-2xl
       text-[#04f79b]
       font-bold    
       font-Source

       `};
`;

const ContractInfo = styled.p`
  ${tw`
       font-bold
       text-xl
       text-white
       text-shadow[#fff 1px 0 10px;]
      //  my-2
       flex
       justify-center
       font-Source
      // px-2       
    `};
`;

const DynamicInfo = styled.p`
  ${tw`
       text-[#04f79b]
       text-shadow[#fff 1px 0 10px;]   
      font-bold
      text-lg
       xs:text-2xl
       font-Source

      //  px-2
      //  mb-2
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
border-[#02ef97]
`};
  background-image: url(${NftInfoBg});
`;

const ButtonWrapper = styled.div`
  ${tw`
  flex
  flex-row
  flex-nowrap
  justify-center
  items-center
  //w-screen
  //h-[10.35vw]
  h-full
  w-full
  
  // m-0
  // p-6
  // sm:w-[75vw]
 // sm:h-[20.7vw]
  bg-cover
  bg-no-repeat
  bg-opacity-0
  
`};
  // background-image: url(${NftBuyFrontBg});
`;

const MintButton = styled.button`
  ${tw`
  bg-opacity-0
  // h-full
  // w-full
  // my-4
  // mx-8
  h-[50px]
  w-[200px]
  xl:h-[4.95vw]
  xl:w-[25vw]
  hover:text-gray-300
 
  bg-cover
  bg-center
  bg-no-repeat
  text-white
  font-bold
  text-lg
  // md:text-2xl
  lg:text-xl
  xl:text-2xl
  text-shadow[#000 1px 0 10px;]
  tracking-wide
  font-Source

`};
  background-image: url(${ConnectMintButtonBg});
`;

const ConnectButton = styled.button`
  ${tw`
  bg-opacity-0
  // h-full
  // w-full
  // my-4
  // mx-8
  h-[50px]
  w-[200px]
  xl:h-[4.95vw]
  xl:w-[25vw]
  hover:text-gray-300
 
  bg-cover
  bg-center
  bg-no-repeat
  text-white
  font-bold
  text-lg
  // md:text-2xl
  lg:text-xl
  xl:text-2xl
  text-shadow[#000 1px 0 10px;]
  tracking-wide
  font-Source

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
  font-Source

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
  font-Source

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
font-Source

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
  tracking-wide
  font-Source
  
`};
`;

const InfoContent = styled.div`
  ${tw`
  text-white
  text-sm
  sm:text-xl
  font-bold
  pb-12
  w-[50vw]
  //font-family[MSJH]
  tracking-wide
  justify-center
  items-center
  content-center
  text-center
  flex
  flex-row
  flex-wrap
  font-Noto

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
grid
grid-cols-1
gap-1
self-center
justify-center
items-center
w-full
// h-[40vh]
lg:w-[50vw]
p-2
`};
`;

const TopTextWrapper = styled.div`
  ${tw`
  flex
  flex-col
  items-center 
  w-full
  h-[30vh]
  // pt-6
  // lg:pt-44
// w-[100vw]
// h-[42.4vw]
// lg:w-[60vw]
 lg:h-[40vh]
relative
pt-2
lg:pt-20
// lg:pt-44
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
w-full
h-full
// w-[70vw]
// h-[40vh]
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
w-full
h-[30vh]
// lg:w-[60vw]
 lg:h-[45vh]
 pt-2
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
w-full
h-full

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
justify-end
// lg:justify-around
//items-center
bg-contain 
bg-center
bg-no-repeat
bg-opacity-0
w-full
h-[100vh]
lg:w-[100vw]
lg:h-[90vh]
relative
`};
  background-image: url(${TopPlanetsBg});
`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #00fff7;
  align-self: center;
`;


export function NFTSection() {
  // const dispatch = useDispatch();
  // const blockchain = useSelector((state) => state.blockchain);
  // const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click button below to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [mintCost, setMintCost] = useState(1);
  const [displayCost, setDisplayCost] = useState(1);
  const [isInWhitelist, setIsInWhitelist] = useState(false);
  const [remainSupply, setRemainSupply] = useState(0);
  const [whitelistMintEnabled, setWhitelistMintEnabled] = useState(false);
  const [maxSupply, setMaxSupply] = useState(1000);
  const [currentWhiteTotal, setCurrentWhiteTotal] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState(null);
  const [networkId, setNetworkId] = useState(0);
  const [CONFIG, setConfig] = useState(config);
  const [smartContract, setSmartContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mintButtonEnabled, setMintButtonEnabled] = useState(false);
  const [batchMaxSupply, setBatchMaxSupply] = useState(0);



  // const [CONFIG, SET_CONFIG] = useState({
  //   CONTRACT_ADDRESS: "",
  //   SCAN_LINK: "",
  //   NETWORK: {
  //     NAME: "",
  //     SYMBOL: "",
  //     ID: 0,
  //   },
  //   NFT_NAME: "",
  //   SYMBOL: "",
  //   // MAX_SUPPLY: 1,
  //   // WEI_COST: 0,
  //   // DISPLAY_COST: 0,
  //   WHITE_MINT_SUPPLY: 0,
  //   GAS_LIMIT: 0,
  //   // MARKETPLACE: "",
  //   // MARKETPLACE_LINK: "",
  //   SHOW_BACKGROUND: false,
  // });

    const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

    const decrementMintAmount = () => {
      if (mintButtonEnabled) {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1 || whitelistMintEnabled) {
          newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
      }
    };

    const incrementMintAmount = () => {

     let remainNormalSupply = batchMaxSupply - (currentWhiteTotal + totalSupply);

      if (mintButtonEnabled) {
      let newMintAmount = mintAmount + 1;
  
      if (whitelistMintEnabled) {
        newMintAmount = 1;
      } else if (newMintAmount >= remainNormalSupply) {
        newMintAmount = remainNormalSupply;
      }
      setMintAmount(newMintAmount);
    }
    };
  


// Web3 start

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

        smartContract.methods
          .wMintNFT()
          .send({
            gasLimit: String(gasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: account,
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
            // setFeedback(`The ${CONFIG.NFT_NAME} is yours!`);
            setClaimingNft(false);
            // dispatch(fetchData(blockchain.account));
            setLoading(false);
          });
      } else {
        console.log("Mint");
        smartContract.methods
          .mintNFT(mintAmount)
          .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: account,
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
            // setFeedback(`The ${CONFIG.NFT_NAME} is yours!`);
            setClaimingNft(false);
            // dispatch(fetchData(blockchain.account));
            setLoading(false);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeNetwork = async ({ networkName }) => {

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x4' }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        // try {
        //   await window.ethereum.request({
        //     method: 'wallet_addEthereumChain',
        //     params: [
        //       {
        //         chainId: '0xf00',
        //         chainName: '...',
        //         rpcUrls: ['https://...'] /* ... */,
        //       },
        //     ],
        //   });
        // } catch (addError) {
        //   // handle "add" error
        // }
      }
      // handle other "switch" errors
    }

  };
  
  async function handleAccountLogin() {
    console.log("handleAccountLogin");

    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      setWeb3(web3);
      try {

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        console.log(accounts[0]);

        const IsInWhitelist = await smartContract.methods
        .isInWhiteList(accounts[0])
        .call();
       setIsInWhitelist(IsInWhitelist);

        const networkId = await ethereum.request({
          method: "net_version",
        });
        setNetworkId(networkId);

        if (networkId === CONFIG.NETWORK.ID) {
       
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            setAccount(accounts[0]);
            // dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          // dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {
        // dispatch(connectFailed("Something went wrong."));
      }
    } else {
      // dispatch(connectFailed("Install Metamask."));
    }

   
  }

  const handleNetworkSwitch = async (networkName) => {
    await changeNetwork({ networkName });
    console.log(networkName);
  };
  
  const getContractInfo = async () => 
  {
    // const CONFIG = config;
    //setConfig(config);
    const abi = contract;

    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);

      const SmartContract = new Web3EthContract(abi, CONFIG.CONTRACT_ADDRESS);
      setSmartContract(SmartContract);
      console.log(SmartContract);

      let MaxSupply = await SmartContract.methods.MAX_SUPPLY().call();
      let maxSupply = parseInt(MaxSupply);
      setMaxSupply(parseInt(maxSupply));
      console.log(maxSupply);

      let BatchMaxSupply = await SmartContract.methods.batchMaxSupply().call();
      let batchMaxSupply = parseInt(BatchMaxSupply);
      setBatchMaxSupply(batchMaxSupply);
      console.log(batchMaxSupply);


      let RemainSupply = await SmartContract.methods.remainSupply().call();
      let remainSupply = parseInt(RemainSupply);
      setRemainSupply(remainSupply);
      console.log(remainSupply);

      let TotalSupply = await SmartContract.methods.totalSupply().call();
      let totalSupply = parseInt(TotalSupply);
      setTotalSupply(totalSupply);
      console.log(totalSupply);

      let CurrentWhiteTotal = await SmartContract.methods
        .currentWhiteTotal()
        .call();
      let currentWhiteTotal = parseInt(CurrentWhiteTotal);
      setCurrentWhiteTotal(parseInt(currentWhiteTotal));
      console.log(currentWhiteTotal);

      let nMintCost = await SmartContract.methods.mintPrice().call();
      let nMintDisplayCost = Web3.utils.fromWei(nMintCost, "ether");
      let wMintCost = await SmartContract.methods.wMintPrice().call();
      let wMintDisplayCost = Web3.utils.fromWei(wMintCost, "ether");

      if (remainSupply === 0) {
        setWhitelistMintEnabled(false);
        setMintButtonEnabled(false);
      } else {
        if (remainSupply <= currentWhiteTotal) {
          setWhitelistMintEnabled(true);
          setMintCost(wMintCost);
          setDisplayCost(wMintDisplayCost);

          if (isInWhitelist) {
            console.log("WHITELIST MINT");

            setMintButtonEnabled(true);
          } else {
            console.log("MINT DISABLED");

            setMintButtonEnabled(false);
          }
        } else {
          setWhitelistMintEnabled(false);
          setMintCost(nMintCost);
          setDisplayCost(nMintDisplayCost);
          setMintButtonEnabled(true);
        }
      }
    }

  }

   

  const getInitialData = async () => {
    console.log("getInitialData");
    setLoading(true);

    setConfig(config);
    // await handleAccountLogin();
    await handleNetworkSwitch("rinkeby");
    await getContractInfo();
    // await getCurrentState();

    setLoading(false);

  };

  // async function getCurrentState() {
  //   console.log('getCurrentState');

  //   // const accounts = await window.ethereum.request({
  //   //   method: "eth_requestAccounts",
  //   // });

  //   // setAccount(accounts[0]);


  //   // let IsInWhitelist = await smartContract.methods
  //   //   .isInWhiteList(accounts[0])
  //   //   .call();
  //   //  setIsInWhitelist(IsInWhitelist);
 
    

  // }

// Web3 end



  useEffect(() => {
    getInitialData();
  }, []);






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

              {loading && (
                <NftMintWrapper>
                  <RingLoader
                    color={"#fff"}
                    loading={loading}
                    css={override}
                    size={100}
                  />
                </NftMintWrapper>
              )}
              {!loading && (
                <NftMintWrapper>
                  <Counter id="counter">
                    {totalSupply} / {maxSupply}
                  </Counter>

<ContractLinkWrapper>
                  <ContractLink>
                    <a href={CONFIG.SCAN_LINK} target="_blank" rel="noreferrer">
                      {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                    </a>
                  </ContractLink>
</ContractLinkWrapper>
                  {remainSupply !== 0 && (
                    <ContractInfo>
                      {mintAmount} {CONFIG.SYMBOL} costs{" "}
                      {(displayCost * mintAmount).toFixed(6)}{" "}
                      {CONFIG.NETWORK.SYMBOL}.
                    </ContractInfo>
                  )}
                  {remainSupply !== 0 && (
                    <ContractInfo id="message">
                      Excluding gas fees.
                    </ContractInfo>
                  )}
                  {remainSupply === 0 && (
                    <ContractInfo id="message">SOLD OUT</ContractInfo>
                  )}
                  {account === "" || smartContract === null ? (
                    <ConnectorWrapper>
                      {/* <DynamicInfo
       style={{
         textAlign: "center",
         color: "var(--accent-text)",
       }}
     >
       Connect to the {CONFIG.NETWORK.NAME} network
     </DynamicInfo> */}
                      <ButtonWrapper>
                        
                        <ConnectButton
                          id="connectButton"
                          onClick={async (e) => {
                            e.preventDefault();
                            await handleAccountLogin();
                            await getContractInfo();
                            // dispatch(connect());
                            // getData();
                          }}
                        >
                          CONNECT
                        </ConnectButton>
                        
                      </ButtonWrapper>
                      {/* {blockchain.errorMsg !== "" ? (
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
     ) : null} */}
                    </ConnectorWrapper>
                  ) : (
                    <>
                      {/* <DynamicInfo>
       {feedback}
     </DynamicInfo>                    */}

                      {remainSupply !== 0 && (
                        <ButtonWrapper>
                          <MintButton
                            id="mintButton"
                            disabled={mintButtonEnabled ? false : true}
                            onClick={async (e) => {
                              e.preventDefault();
                              claimNFTs();
                              await getContractInfo();
                              // getData();
                            }}
                          >
                            {whitelistMintEnabled ? "WHITELIST MINT" : "MINT"}
                          </MintButton>
                        </ButtonWrapper>
                      )}

                      {remainSupply !== 0 && (
                        <InputWrapperNew>
                          <MinusButton
                            disabled={loading ? true : false}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          ></MinusButton>
                          <AmountFrame>
                            <Quantity>{mintAmount}</Quantity>
                          </AmountFrame>
                          <PlusButton
                            disabled={loading ? true : false}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          ></PlusButton>
                        </InputWrapperNew>
                      )}
                    </>
                  )}
                </NftMintWrapper>
              )}

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

            {loading && (
              <NftMintWrapper>
                <RingLoader
                  color={"#fff"}
                  loading={loading}
                  css={override}
                  size={100}
                />
              </NftMintWrapper>
            )}

            {!loading && (
              <NftMintWrapper>
                <Counter id="counter">
                  {totalSupply} / {maxSupply}
                </Counter>

                <ContractLinkWrapper>
                <ContractLink>
                  <a href={CONFIG.SCAN_LINK} target="_blank" rel="noreferrer">
                    {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                  </a>
                </ContractLink>
                </ContractLinkWrapper>


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
                {remainSupply === 0 && (
                  <ContractInfo id="message">SOLD OUT</ContractInfo>
                )}
                {account === "" || smartContract === null ? (
                  <ConnectorWrapper>
                    {/* <DynamicInfo
                    style={{
                      textAlign: "center",
                      color: "var(--accent-text)",
                    }}
                  >
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </DynamicInfo> */}

                    <ButtonWrapper>
                      <RingLoader color={"#fff"} loading={loading} size={25} />
                      {!loading && 
                        <ConnectButton
                          id="connectButton"
                          onClick={async (e) => {
                            e.preventDefault();
                            await handleAccountLogin();
                            await getContractInfo();
                            // dispatch(connect());
                            // getData();
                          }}
                        >
                          CONNECT
                        </ConnectButton>
                      }
                    </ButtonWrapper>
                    {/* {blockchain.errorMsg !== "" ? (
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
                  ) : null} */}
                  </ConnectorWrapper>
                ) : (
                  <>
                    {/* <DynamicInfo>
                      {feedback}
                    </DynamicInfo>                    */}

                    {remainSupply !== 0 && (
                      <ButtonWrapper>
                        <RingLoader
                          color={"#fff"}
                          loading={loading}
                          size={25}
                        />
                        {!loading && (
                          <MintButton
                            id="mintButton"
                            disabled={mintButtonEnabled ? false : true}
                            onClick={async (e) => {
                              e.preventDefault();
                              claimNFTs();
                              await getContractInfo();
                              // getData();
                            }}
                          >
                            {whitelistMintEnabled ? "WHITELIST MINT" : "MINT"}
                          </MintButton>
                        )}
                      </ButtonWrapper>
                    )}

                    {remainSupply !== 0 && (
                      <InputWrapperNew>
                        <MinusButton
                          disabled={loading ? true : false}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        ></MinusButton>
                        <AmountFrame>
                          <Quantity>{mintAmount}</Quantity>
                        </AmountFrame>
                        <PlusButton
                          disabled={loading ? true : false}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        ></PlusButton>
                      </InputWrapperNew>
                    )}
                  </>
                )}
              </NftMintWrapper>
            )}
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
