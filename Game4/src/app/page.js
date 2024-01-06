'use client';

import { useState } from "react";
import data from "./data.json";
import Card from "./components/Card";
import RandomChars from "./components/RandomChars";

export default function Home() {
  const [items, setItems] = useState(data);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-24">
      <div className="flex max-w-[1024px] w-full max-h-[600px] h-screen items-center justify-between px-6">
        {
          items.map((item, index) => {
            return (
                <Card key={index} item={item} />
              )
            })
        }
      </div>

      <div className="flex max-w-[1024px] w-full max-h-[140px] h-screen items-center justify-center gap-12">
        <RandomChars items={items} />
      </div>

      <div className="absolute min-h-screen w-[50%] bg-[#FDFD66] right-0 z-[-1]"></div>
    </main>
  )
}


