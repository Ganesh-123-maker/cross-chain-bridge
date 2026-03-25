import React from "react";
import { motion } from "framer-motion";

function StatsGrid() {

  const stats = [
    {
      label: "Total Volume",
      value: "$2.4B+",
      icon: "📊",
      change: "+12.5%"
    },
    {
      label: "Supported Chains",
      value: "15+",
      icon: "🔗",
      change: "Networks"
    },
    {
      label: "Transactions",
      value: "1.2M+",
      icon: "⚡",
      change: "+8.3%"
    },
    {
      label: "Active Users",
      value: "45K+",
      icon: "👥",
      change: "+15.2%"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
          className="bg-[#0f1524] border border-white/5 rounded-2xl p-6 text-left transition-colors hover:border-white/15"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-11 h-11 rounded-xl bg-[#1a2235] flex items-center justify-center text-xl">
              {stat.icon}
            </div>
            <span
              className={`text-xs font-bold ${
                stat.change.includes("+")
                  ? "text-green-500"
                  : "text-indigo-500"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <div className="text-3xl font-extrabold text-white mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-[#6b7a99] font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsGrid;