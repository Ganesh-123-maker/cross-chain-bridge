import React from "react";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function PortfolioModal({ open, close }) {
  if (!open) return null;
  const assets = [
    { sym: "ETH", name: "Ethereum", balance: "1000.24", value: "$2,294", emoji: "⬡", bg: "#627eea" },
    { sym: "USDT", name: "Tether", balance: "32000", value: "$320", emoji: "💲", bg: "#26a17b" },
    { sym: "MATIC", name: "Polygon", balance: "54000", value: "$412", emoji: "◈", bg: "#8247e5" }
  ];

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
              Portfolio
            </h2>
            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <div className="space-y-3">
            {assets.map((asset, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-[#131929] border border-white/10 rounded-xl p-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: asset.bg }}
                  >
                    {asset.emoji}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">
                      {asset.sym}
                    </span>
                    <span className="text-xs text-gray-400">
                      {asset.name}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">
                    {asset.balance}
                  </div>
                  <div className="text-xs text-gray-400">
                    {asset.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-5 flex items-center justify-center gap-2 text-indigo-400 text-sm hover:underline"
          >
            View Full Portfolio
            <ExternalLink className="w-4 h-4"/>
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PortfolioModal;