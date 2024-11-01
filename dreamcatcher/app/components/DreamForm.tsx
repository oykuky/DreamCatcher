import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import React, { useState } from "react";

function DreamForm() {
  // const [keywords,setKeywords] = useState<string[]>([]);
  const [dreamTxt, setDreamTxt] = useState<string>("");

  // const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = e.target.value;
  //   setKeywords(inputValue.split(",").map((keyword) => keyword.trim()));
  // };

  return (
    <>
      <NeonGradientCard className="max-w-2xl h-[520px] items-center justify-center text-center mt-12">
        <form className="flex flex-col gap-10 p-2 text-white">
          <span className="pointer-events-none h-full whitespace-pre-wrap bg-gradient-to-br text-slate-300 from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center font-semibold leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Rüyanızı Anlatın
          </span>
          <textarea
            placeholder="Rüyanızı detaylı bir şekilde anlatın..."
            value={dreamTxt}
            onChange={(e) => setDreamTxt(e.target.value)}
            className="min-h-36 pl-2 bg-transparent rounded-lg shadow-pink-500 shadow-sm border-s-fuchsia-200 focus:border-pink-600 focus:border-2 outline-none"
          />

          <span className="pointer-events-none h-full whitespace-pre-wrap bg-gradient-to-br text-slate-300 from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center font-semibold leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Anahtar Kelimeler
          </span>
          <input
            className="bg-transparent h-9 pl-2 rounded-lg shadow-pink-500 shadow-sm focus:border-pink-600 focus:border-2 outline-none"
            placeholder="Örn:  kalp, deniz, ay (virgülle ayırın)"
            // onChange={handleKeywordsChange}
          />
          <button
            type="submit"
            className="text-white rounded-lg text-md font-semibold px-5 py-3 mt-12 text-center bg-gray-950 border-pink-500 border-t-2 shadow-md shadow-pink-500 hover:scale-105 duration-300 transition ease-in-out"
          >
            Rüyayı Yorumla
          </button>
        </form>
      </NeonGradientCard>
    </>
  );
}

export default DreamForm;
