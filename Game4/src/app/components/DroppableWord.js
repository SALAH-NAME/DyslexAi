import { useDrop } from 'react-dnd';

function DroppableWord({ word, onDropChar }) {
  const [_, dropRef] = useDrop(() => ({
    accept: 'char',
    drop: (item) => {
      onDropChar(item.char);
    },
  }));

  return (
    <div ref={dropRef} className="flex gap-3 text-black">
      {word.map((letter, index) => (
        <h1 key={index} className="w-[92px] h-[136px] text-blue-950 text-5xl bg-yellow-50 rounded-[29px] border border-black flex items-center justify-center">
          {letter}
        </h1>
      ))}
    </div>
  );
}

export default DroppableWord;