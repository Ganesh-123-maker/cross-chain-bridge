import React from "react";
import { X, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function WalletSelectionModal({ open, close, openMetaMask }) {

  if (!open) return null;

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
              Connect Wallet
            </h2>
            <button onClick={close}>
              <X className="w-4 h-4 text-gray-400"/>
            </button>
          </div>
          <div className="space-y-3">
            <button
              onClick={openMetaMask}
              className="w-full flex items-center gap-3 bg-[#131929] border border-white/10 rounded-xl p-4 hover:border-indigo-500 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold">MetaMask</span>
                <span className="text-xs text-gray-400">
                  Connect using MetaMask wallet
                </span>
              </div>

            </button>
            <button
              className="w-full flex items-center gap-3 bg-[#131929] border border-white/10 rounded-xl p-4 hover:border-indigo-500 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">
                W
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold">WalletConnect</span>
                <span className="text-xs text-gray-400">
                  Scan QR code to connect
                </span>
              </div>
            </button>

            <button
              className="w-full flex items-center gap-3 bg-[#131929] border border-white/10 rounded-xl p-4 hover:border-indigo-500 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold">
                C
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold">Coinbase Wallet</span>
                <span className="text-xs text-gray-400">
                  Connect using Coinbase Wallet
                </span>
              </div>
            </button>
          </div>
          <div className="mt-5 text-center text-xs text-gray-400">
            By connecting a wallet you agree to our terms.
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default WalletSelectionModal;