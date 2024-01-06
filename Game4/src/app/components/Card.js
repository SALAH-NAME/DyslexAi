import Word from "./Word";

export default function Card({ item }) {

  return (
    <>
		<div className="w-full h-full flex flex-col items-center justify-between">
			<div className="max-w-[380px] max-h-[380px] h-full w-full bg-sky-200 rounded-[60px]">

			</div>
			<div className="flex gap-3 text-black">
				{
					<Word word={item.show.split('')} />
				}
			</div>

		</div>

    </>
  )
}