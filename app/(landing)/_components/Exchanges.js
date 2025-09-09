import React from "react";
import Image from "next/image";

const memeGallery = [
  {
    image: "/collection/1.png",
    title: "Diamond Hands Bitty",
    description: "When you're down 50% but still hodling strong 💎🙌",
  },
  {
    image: "/collection/2.png", 
    title: "Orange Pill Bitty",
    description: "Spreading the Bitcoin gospel, one meme at a time 🧡",
  },
  {
    image: "/collection/3.png",
    title: "Number Go Up Bitty", 
    description: "That feeling when Bitcoin hits a new ATH 🚀",
  },
  {
    image: "/collection/4.png",
    title: "Stacking Sats Bitty",
    description: "Every sat counts in the journey to financial freedom ⚡",
  },
  {
    image: "/collection/6.png",
    title: "HODL Mode Bitty",
    description: "Not selling until we reach the moon 🌙",
  },
  {
    image: "/collection/8.png",
    title: "Bitcoin Maximalist Bitty",
    description: "There is no second best. Bitcoin only! 🟠",
  },
];

const Exchanges = () => {
  return (
    <div id="memes" className="max-w-[85rem] mx-auto py-12 px-4">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-bitty text-shadow text-center">
          Meme Gallery
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          Bitty's Bitcoin Meme Collection �
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {memeGallery.map((meme, idx) => (
          <div key={idx} className="group relative block">
            <span className="absolute inset-0 bg-bitty rounded-xl border-2 border-dashed border-black"></span>
            <div className="relative h-full transform rounded-xl border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
              <div className="p-4">
                <Image
                  src={meme.image}
                  width={300}
                  height={300}
                  alt={meme.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="font-stopbuck text-xl text-black mb-2">{meme.title}</h4>
                <p className="font-mono text-sm text-gray-700">{meme.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
