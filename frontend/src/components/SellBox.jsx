import React from "react";
import { ChevronDown } from "lucide-react";

function SellBox({
  sellAmount,
  setSellAmount,
  sellToken,
  sellChain,
  openTokenModal
}) {

  return (
    <div className="bg-[#131929] border border-white/5 rounded-xl p-3.5">
      <span className="text-[10px] font-bold text-[#6b7a99] uppercase">
        SELL
      </span>
      <div className="flex items-center gap-2.5 mt-2">
        <button
          onClick={openTokenModal}
          className="flex items-center gap-2"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
            style={{ background: sellToken?.bg }}
          >
            {sellToken?.emoji}
          </div>
          <div className="flex flex-col text-left">
           <span className="text-sm font-bold">
              {sellToken?.sym}
            </span>
            <span className="text-[10px] text-[#6b7a99]">
              {sellChain?.short}
            </span>
          </div>
          <ChevronDown className="w-3 h-3 text-[#6b7a99]" />
        </button>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input
          type="number"
          value={sellAmount}
          onChange={(e) => setSellAmount(e.target.value)}
          placeholder="0.0"
          className="flex-1 bg-transparent border-none outline-none text-2xl font-bold text-white"
        />
        <button
          onClick={() => setSellAmount(sellToken?.bal)}
          className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-bold px-2.5 py-1 rounded-md"
        >
          Max
        </button>
      </div>
    </div>
  );
}

export default SellBox;