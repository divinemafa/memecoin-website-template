import React from "react";
import Image from "next/image";
import { getAssetPath } from "../../../lib/utils";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-bitty text-shadow text-center mt-14">
            About Bitty
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`The Official Bitcoin Meme Mascot`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src={getAssetPath("/collection/9.png")}
              width={700}
              height={700}
              alt="Bitty - Bitcoin Mascot"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">Bitty</span>, the beloved{" "}
                <span className="font-semibold italic">{'"Bitcoin mascot"'}</span>{" "}
                emerged from the digital depths of the blockchain to spread Bitcoin 
                joy and wisdom. With glowing orange eyes and a mischievous grin, 
                Bitty embodies the spirit of decentralization and financial freedom.{" "}
              </p>
              <p className="indent-12 mt-3">
                Born from the collective dreams of hodlers worldwide, Bitty became 
                the perfect ambassador for Bitcoin culture. Through viral memes and 
                relatable content, <span className=" italic font-bold">Bitty</span> makes 
                complex crypto concepts simple and joyful for everyone.
              </p>
              <p className="indent-12 mt-3">
                From diamond hands to &ldquo;number go up&rdquo; technology, Bitty captures 
                the essence of Bitcoin culture while educating the masses about 
                sound money and the orange pill.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            Today 🚀, <span className="text-3xl font-bold">Bitty</span>{" "}
            continues the mission on{" "}
            <span className="italic font-semibold">Bitcoin&rsquo;s timechain</span>,
            spreading memes and orange-pilling the world! 
          </p>
          <p className="text-4xl p-10">
            Join{" "}
            <span className="text-5xl font-bold underline decoration-bitty">
              Bitty
            </span>{" "}
            in celebrating{" "}
            <span className="text-5xl bg-gradient-to-r from-[#f7931a] to-[#ffb347] inline-block text-transparent bg-clip-text font-bold">
              Bitcoin
            </span>{" "}
            culture! 🧡
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
