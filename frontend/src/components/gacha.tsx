"use client";
import gachaLogic from "@/backend/gachaLogic";
import { useState, useEffect } from "react";

interface PlayerData {
  名前: string;
  url: string;
}

export default function Gacha() {
  const [playersData, setPlayersData] = useState<PlayerData[]>([]);

  // Fetch data using gachaLogic in useEffect
  useEffect(() => {
    const data = gachaLogic();
    setPlayersData(data);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex justify-center">
        <ul>
      {playersData.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link["名前"]}</a>
        </li>
      ))}
      </ul>
    </div>
  );
}
