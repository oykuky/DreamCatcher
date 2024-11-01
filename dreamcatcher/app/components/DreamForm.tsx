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
      <NeonGradientCard className="max-w-xl items-center justify-center text-center mt-12 ">
          <form className="flex flex-col gap-8 p-2 text-white">
          <span className="pointer-events-none h-full whitespace-pre-wrap bg-gradient-to-br text-transparent from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center font-bold leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Rüyanızı Anlatın
          </span>
            <textarea
              placeholder="Rüyanızı detaylı bir şekilde anlatın..."
              value={dreamTxt}
              onChange={(e) => setDreamTxt(e.target.value)}
              className="min-h-32 bg-transparent rounded-lg focus:border-pink-600 focus:border-2 outline-none"
            />

            <span className="pointer-events-none h-full whitespace-pre-wrap bg-gradient-to-br text-transparent from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center font-bold leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Anahtar Kelimeler
            </span>
            <input
              className="bg-transparent rounded-lg focus:border-pink-600 focus:border-2 outline-none"
              placeholder="Örn: uçmak, deniz, aile (virgülle ayırın)"
              // onChange={handleKeywordsChange}
            />
            {/* <button
              type="submit"
              className="w-full h-9 font-semibold bg-fuchsia-800 rounded-md"
            >
              Rüyayı Yorumla
            </button> */}
          </form>
      </NeonGradientCard>
    </>
  );
}

export default DreamForm;
