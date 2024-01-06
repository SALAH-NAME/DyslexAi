'use client';


import { useState } from "react";
import data from "./data.json";

export default function Home() {
  const [items, setItems] = useState(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="absolute min-h-screen w-[50%] bg-[#FDFD66] right-0 z-[-1]"></div>
      <div className="max-w-[1024px] w-full max-h-[500px] h-screen bg-orange-500">

      </div>
    </main>
  )
}
