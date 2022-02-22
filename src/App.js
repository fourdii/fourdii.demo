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


// const truncate = (input, len) =>
//   input.length > len ? `${input.substring(0, len)}...` : input;

function App() {
  // const dispatch = useDispatch();
  // const blockchain = useSelector((state) => state.blockchain);
  // const data = useSelector((state) => state.data);
  // const [claimingNft, setClaimingNft] = useState(false);
  // const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  // const [mintAmount, setMintAmount] = useState(1);
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
  //   MAX_SUPPLY: 1,
  //   WEI_COST: 0,
  //   DISPLAY_COST: 0,
  //   GAS_LIMIT: 0,
  //   MARKETPLACE: "",
  //   MARKETPLACE_LINK: "",
  //   SHOW_BACKGROUND: false,
  // });

  // const claimNFTs = () => {
  //   let cost = CONFIG.WEI_COST;
  //   let gasLimit = CONFIG.GAS_LIMIT;
  //   let totalCostWei = String(cost * mintAmount);
  //   let totalGasLimit = String(gasLimit * mintAmount);
  //   console.log("Cost: ", totalCostWei);
  //   console.log("Gas limit: ", totalGasLimit);
  //   setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
  //   setClaimingNft(true);
  //   blockchain.smartContract.methods
  //     .mintNFT(mintAmount)
  //     .send({
  //       gasLimit: String(totalGasLimit),
  //       to: CONFIG.CONTRACT_ADDRESS,
  //       from: blockchain.account,
  //       value: totalCostWei,
  //     })
  //     .once("error", (err) => {
  //       console.log(err);
  //       setFeedback("Sorry, something went wrong please try again later.");
  //       setClaimingNft(false);
  //     })
  //     .then((receipt) => {
  //       console.log(receipt);
  //       setFeedback(
  //         `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
  //       );
  //       setClaimingNft(false);
  //       dispatch(fetchData(blockchain.account));
  //     });
  // };

  // const decrementMintAmount = () => {
  //   let newMintAmount = mintAmount - 1;
  //   if (newMintAmount < 1) {
  //     newMintAmount = 1;
  //   }
  //   setMintAmount(newMintAmount);
  // };

  // const incrementMintAmount = () => {
  //   let newMintAmount = mintAmount + 1;
  //   if (newMintAmount > 10) {
  //     newMintAmount = 10;
  //   }
  //   setMintAmount(newMintAmount);
  // };

  // const getData = () => {
  //   if (blockchain.account !== "" && blockchain.smartContract !== null) {
  //     dispatch(fetchData(blockchain.account));
  //   }
  // };

  // const getConfig = () => {
  //   // const configResponse = await fetch("/config/config.json", {
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     Accept: "application/json",
  //   //   },
  //   // });
  //   // const config = await configResponse.json();
  //   SET_CONFIG(config);
  // };

  // useEffect(() => {
  //   getConfig();
  // }, []);

  // useEffect(() => {
  //   getData();
  // }, [blockchain.account]);

  return (
    <AppContainer>
      <TopSection/>
      <AboutSection/>
      <Footer/>
      {/* <div>
        <div>        
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
        </div>    
      </div> */}
    </AppContainer>
  );
}

export default App;
