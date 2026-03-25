import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import SellBox from "./SellBox";
import BuyBox from "./BuyBox";
import FlipButton from "./FlipButton";

import { CHAIN_TOKENS, CHAINS } from "../constants";

function SwapCard({ openToken }) {

  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");

  const [sellChain, setSellChain] = useState(CHAINS[0]);
  const [buyChain, setBuyChain] = useState(CHAINS[1]);

  const [sellToken, setSellToken] = useState(
    CHAIN_TOKENS["eth-sepolia"][0]
  );

  const [buyToken, setBuyToken] = useState(
    CHAIN_TOKENS["poly-mumbai"][0]
  );

  const flipTokens = () => {
    const tempChain = sellChain;
    setSellChain(buyChain);
    setBuyChain(tempChain);

    const tempToken = sellToken;
    setSellToken(buyToken);
    setBuyToken(tempToken);

    setSellAmount(buyAmount);
  };

  useEffect(() => {
    if (sellAmount && !isNaN(parseFloat(sellAmount))) {
      const out =
        parseFloat(sellAmount) *
        (sellToken.rate / buyToken.rate);

      setBuyAmount(out.toFixed(6));
    } else {
      setBuyAmount("");
    }
  }, [sellAmount, sellToken, buyToken]);

  useEffect(() => {
    const handler = (e) => {
      const { token, type } = e.detail;

      if (type === "sell") {
        setSellToken(token);
      } else {
        setBuyToken(token);
      }
    };

    window.addEventListener("tokenSelected", handler);
    return () => window.removeEventListener("tokenSelected", handler);
  }, []);

  const handleTransfer = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not installed");
        return;
      }

      if (!sellAmount || parseFloat(sellAmount) <= 0) {
        alert("Enter valid amount");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      console.log("Connected wallet:", address);
      const tx = await signer.sendTransaction({
        to: address,
        value: ethers.parseEther(sellAmount.toString()),
      });
      console.log("Transaction sent:", tx.hash);
      alert("Transaction sent!");
      await tx.wait();
      alert("Transaction confirmed!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    }
  };

  return (
    <div className="w-full max-w-[480px] bg-[#0f1524] border border-white/10 rounded-[24px] overflow-hidden flex-shrink-0 shadow-2xl">
      <div className="p-5 pb-0">
        <h2 className="text-lg font-bold">Cross-Chain Swap</h2>
        <p className="text-xs text-[#6b7a99] mt-1">
          Swap tokens across networks
        </p>
      </div>

      <div className="p-5 space-y-3">
        <SellBox
          sellAmount={sellAmount}
          setSellAmount={setSellAmount}
          sellToken={sellToken}
          sellChain={sellChain}
          openTokenModal={() => {
            window.selectingType = "sell";
            openToken();
          }}
        />

        <FlipButton flipTokens={flipTokens} />
        <BuyBox
          buyAmount={buyAmount}
          buyToken={buyToken}
          buyChain={buyChain}
          openTokenModal={() => {
            window.selectingType = "buy";
            openToken();
          }}
        />
        <button
          onClick={handleTransfer}
          className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-br from-indigo-600 to-violet-600 text-white hover:opacity-90"
        >
          Transfer via Axelar
        </button>
        <div className="text-center text-[10px] text-[#3d4f70]">
          Powered by <b className="text-[#4a5980]">thirdweb</b> &{" "}
          <b className="text-indigo-500">Axelar</b>
        </div>
      </div>
    </div>
  );
}

export default SwapCard;