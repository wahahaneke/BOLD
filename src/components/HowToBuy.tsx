import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * 购买指南组件
 * 提供购买$BOLD代币的链接和说明
 * @returns {JSX.Element} 购买指南组件
 */
export default function HowToBuy() {
  return (
    <div className="bg-toby-darkbg py-16 px-4" id="how-to-buy">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-white font-archivo text-3xl md:text-4xl mb-12">
          HOW TO BUY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DexScreener */}
          <div className="bg-toby-black/60 rounded-lg p-6 transition-all hover:shadow-lg hover:shadow-toby-green-500/20 border border-toby-green-900/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-toby-green-400 font-archivo text-xl mb-3">BUY BOLD</h3>
              <div className="bg-toby-black/40 rounded px-3 py-2 mb-4">
                <span className="text-white font-bold">SOLANA</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Check the current price and chart on DexScreener before purchasing.
            </p>
            <a
              href="https://dexscreener.com/solana/8bjikkzel672yumyoznuda66aj4t8wjczk4pblmvucuu"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-toby-green-600 to-toby-green-500 text-white text-center py-3 rounded-md font-medium hover:from-toby-green-700 hover:to-toby-green-600 transition-colors"
            >
              DEXSCREENER
            </a>
          </div>
          
          {/* Raydium */}
          <div className="bg-toby-black/60 rounded-lg p-6 transition-all hover:shadow-lg hover:shadow-toby-green-500/20 border border-toby-green-900/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-toby-green-400 font-archivo text-xl mb-3">BUY BOLD</h3>
              <div className="bg-toby-black/40 rounded px-3 py-2 mb-4">
                <span className="text-white font-bold">SOLANA</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Buy directly on the Raydium Exchange with your wallet connected.
            </p>
            <a
              href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=GpDLQPWmCaNzDqfokQTj2QyXqLbkUq1PxN4dLmdEMMQE&fixed=in"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-toby-yellow-600 to-toby-yellow-500 text-toby-black text-center py-3 rounded-md font-medium hover:from-toby-yellow-700 hover:to-toby-yellow-600 transition-colors"
            >
              RAYDIUM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
