import React from "react";

function DreamForm() {
  return (
    <div className="w-full max-w-[800px] px-2  mt-20 flex gap-4 p-1.5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-800 m-3 rounded-md justify-center items-center">
      <div className="rounded-md p-2 bg-gray-900 w-full">
        <form className="flex flex-col gap-8 p-2 ">
            <label className="text-lg font-medium">Rüyanızı Anlatın</label>
            <textarea
              placeholder="Rüyanızı detaylı bir şekilde anlatın..."
              // value={}
              // onChange={}
              className="min-h-32 bg-gray-800 rounded-lg focus:border-yellow-400 focus:border-2 outline-none"
            />
        
            <label className="text-lg font-medium">Anahtar Kelimeler</label>
            <input
              className="bg-gray-800 rounded-lg focus:border-yellow-400 focus:border-2 outline-none"
              placeholder="Örn: uçmak, deniz, aile (virgülle ayırın)"
              // value={keywords}
              // onChange={(e) => setKeywords(e.target.value)}
            />
          <button type="submit" className="w-full h-9 font-semibold bg-fuchsia-800 rounded-md">
            Rüyayı Yorumla
          </button>
        </form>
      </div>
    </div>
  );
}

export default DreamForm;
