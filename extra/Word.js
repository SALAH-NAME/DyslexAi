import { useState } from 'react';

export default function Word({ word }) {
	const [currentWord, setCurrentWord] = useState(word);

  const handleDrop = (event, index) => {
    event.preventDefault();
    const droppedChar = event.dataTransfer.getData('text/plain');
    let newWord = [...currentWord];
    if (newWord[index] !== '_') return;
    newWord[index] = droppedChar;
    setCurrentWord(newWord);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  


  return (
	<div className="flex justify-center items-center">
	{currentWord.map((char, index) => (
	  <div 
		className="flex justify-center items-center m-2 bg-orange-500 w-10 h-10" 
		onDrop={(event) => handleDrop(event, index)} 
		onDragOver={handleDragOver}
	  >
		<h1 className='w-10 h-10'>{char}</h1>
	  </div>
	))}
  </div>
  )
}
