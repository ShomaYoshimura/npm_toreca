import React from "react";
import Gacha from "@/components/gacha";

const IndexPage = () => {
  return (
   <>
   <header className="flex justify-center items-center text-[64px]">
    <h1>NPMガチャ</h1>
   </header>
   <div className="flex justify-center items-center">
    <p>日本プロ麻雀協会の選手をランダムにピック出来るシステムです</p>
   </div>
   <Gacha />
   </>
  );
};

export default IndexPage;
