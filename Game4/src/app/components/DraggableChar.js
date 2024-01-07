import { useDrag } from 'react-dnd';

function DraggableChar({ char, onDragEnd }) {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: 'char',
    item: { char },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        onDragEnd(char);
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  return (
    <h1
      ref={dragRef}
      style={{ opacity }}
      className="w-[92px] h-[136px] text-blue-950 text-5xl bg-yellow-50 rounded-[29px] border border-black flex items-center justify-center"
    >
      {char}
    </h1>
  );
}

export default DraggableChar;