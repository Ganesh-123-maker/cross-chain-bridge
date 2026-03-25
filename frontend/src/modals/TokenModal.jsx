import React, { useState } from "react";
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CHAIN_TOKENS } from "../constants";

function TokenModal({ open, close, onSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  if (!open) return null;
  const tokens = Object.values(CHAIN_TOKENS).flat();
  const filteredTokens = tokens.filter((t) =>
    t.sym.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-[#0f1524] border border-white/10 rounded-2xl w-[420px] p-6"
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-bold">
              Select Token
            </h2>
            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400"/>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search token..."
              className="w-full pl-10 pr-4 py-2 bg-[#131929] border border-white/10 rounded-lg outline-none"
            />
          </div>
          <div className="max-h-[320px] overflow-y-auto space-y-2">
            {filteredTokens.map((token, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelect(token);
                  close();
                }}
                className="w-full flex items-center gap-3 p-3 bg-[#131929] border border-white/10 rounded-lg hover:border-indigo-500 transition-all"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ background: token.bg }}
                >
                  {token.emoji}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold">
                    {token.sym}
                  </span>
                  <span className="text-xs text-gray-400">
                    {token.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TokenModal;