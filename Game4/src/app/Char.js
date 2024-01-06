
export default function Char({ char }) {
	const handleDragStart = (event) => {
		event.dataTransfer.setData('text/plain', char);
	  };

  return (
		<div  className="flex justify-center items-center bg-green-500 w-10 h-10" draggable onDragStart={handleDragStart} >
			<h1 className='w-10 h-10'>{char}</h1>
		</div>
  )
}
