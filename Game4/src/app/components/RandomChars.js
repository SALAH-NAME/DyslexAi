export default function RandomChars({ items, onDropChar }) {
  const handleDragStart = (e, char) => {
    e.dataTransfer.setData("text/plain", char);
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <h1 
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item.answer)}
            className="w-[92px] h-[136px] text-blue-950 text-5xl bg-yellow-50 rounded-[29px] border border-black flex items-center justify-center"
          >
            {item.answer}
          </h1>
        );
      })}
    </>
  );
}