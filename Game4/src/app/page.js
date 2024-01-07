"use client";

import { useState } from 'react';
import Card from './components/Card';
import RandomChars from './components/RandomChars';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableChar from './components/DraggableChar';
import DroppableWord from './components/DroppableWord';
import data from './data.json';
import './globals.css'; // Assuming you have a file for styles



// function Home() {
//   const [items, setItems] = useState(data.map(item => ({ ...item, visible: true })));
//   const [word, setWord] = useState('_og'.split(''));

//   const handleDropChar = (char) => {
//     const newWord = [...word];
//     const charIndex = newWord.findIndex(c => c === '_');
//     if (charIndex > -1) {
//       newWord[charIndex] = char;
//       setWord(newWord);

//       // Hide the character that was just used
//       setItems(prevItems =>  
//         prevItems.map(item =>
//           item.answer === char ? { ...item, visible: false } : item
//         )
//       );
//     }
//   };

//   const handleDragEnd = (char) => {
//     setItems(prevItems =>
//       prevItems.map(item =>
//         item.answer === char ? { ...item, visible: false } : item
//       )
//     );
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="game-container">
//         <DroppableWord word={word} onDropChar={handleDropChar} />
//         {items
//           .filter(item => item.visible)
//           .map((item, index) => (
//             <DraggableChar
//               key={index}
//               char={item.answer}
//               onDragEnd={handleDragEnd}
//             />
//           ))}
//       </div>
//     </DndProvider>
//   );
// }
// export default Home;



export default function Home() {
  const [items, setItems] = useState(data.map(item => ({ ...item, visible: true })));
  const [word, setWord] = useState('_og'.split(''));

  const handleDropChar = (char) => {
    const newWord = [...word];
    const charIndex = newWord.findIndex(c => c === '_');
    if (charIndex > -1) {
      newWord[charIndex] = char;
      setWord(newWord);

      // Hide the character that was just used
      setItems(prevItems =>  
        prevItems.map(item =>
          item.answer === char ? { ...item, visible: false } : item
        )
      );
    }
  };

  const handleDragEnd = (char) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.answer === char ? { ...item, visible: false } : item
      )
    );
  };
  
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
        <DndProvider backend={HTML5Backend}>
        <div className="game-container">
          <DroppableWord word={word} onDropChar={handleDropChar} />
            {items
              .filter(item => item.visible)
              .map((item, index) => (
                <DraggableChar
                  key={index}
                  char={item.answer}
                  onDragEnd={handleDragEnd}
                />
              ))}
          </div>
        </DndProvider>
      </div>

      <div className="absolute min-h-screen w-[50%] bg-[#FDFD66] right-0 z-[-1]"></div>
    </main>
  )
}
