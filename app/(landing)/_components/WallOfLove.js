import React from "react";
import { X, Telegram, Youtube } from "@/components/icons";

const WallOfLove = () => {
  return (
    <div id="community" className="max-w-[85rem] mx-auto py-12 px-4">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-bitty text-shadow text-center">
          Join Our Community
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          Connect with fellow Bitcoin enthusiasts! 🧡
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        <div className="group relative block">
          <span className="absolute inset-0 bg-bitty rounded-xl border-2 border-dashed border-black"></span>
          <div className="relative h-full transform rounded-xl border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
            <div className="p-6 text-center">
              <div className="text-6xl mb-4"><X /></div>
              <h4 className="font-stopbuck text-2xl text-black mb-4">Follow on X</h4>
              <p className="font-mono text-gray-700 mb-4">Daily memes, Bitcoin news, and community discussions</p>
              <a href="#" target="_blank" className="bg-bitty text-black font-stopbuck px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                Follow @BittyBTC
              </a>
            </div>
          </div>
        </div>

        <div className="group relative block">
          <span className="absolute inset-0 bg-bitty rounded-xl border-2 border-dashed border-black"></span>
          <div className="relative h-full transform rounded-xl border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
            <div className="p-6 text-center">
              <div className="text-6xl mb-4"><Telegram /></div>
              <h4 className="font-stopbuck text-2xl text-black mb-4">Join Telegram</h4>
              <p className="font-mono text-gray-700 mb-4">Real-time chat with the Bitty community</p>
              <a href="#" target="_blank" className="bg-bitty text-black font-stopbuck px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                Join Chat
              </a>
            </div>
          </div>
        </div>

        <div className="group relative block">
          <span className="absolute inset-0 bg-bitty rounded-xl border-2 border-dashed border-black"></span>
          <div className="relative h-full transform rounded-xl border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
            <div className="p-6 text-center">
              <div className="text-6xl mb-4"><Youtube /></div>
              <h4 className="font-stopbuck text-2xl text-black mb-4">Watch Videos</h4>
              <p className="font-mono text-gray-700 mb-4">Learn Bitcoin basics with Bitty's guides</p>
              <a href="#" target="_blank" className="bg-bitty text-black font-stopbuck px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
