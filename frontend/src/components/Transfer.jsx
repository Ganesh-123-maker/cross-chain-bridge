import { useState } from "react";
import { ethers } from "ethers";
import { contractAddress, abi } from "../utils/contract.js";

function Transfer() {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  async function transferBTC() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    await contract.transfer(receiver, Number(amount));
    alert("Transfer successful");
  }

  return (
    <div>
      <input
        placeholder="Receiver Address"
        onChange={(e) => setReceiver(e.target.value)}
      />
      <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={transferBTC}>Transfer BTC</button>
    </div>
  );
}

export default Transfer;