import Char from "./Char";



export default function RChars({ items }) {
  return (
		<div className="flex justify-center items-center gap-7">
			{items.map((item, index) => (
				<Char char={item.answer} />
			))}
      </div>
  )
}
