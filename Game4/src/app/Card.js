import Word from "./Word";

export default function Card({ item }) {

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[350px] h-[350px] flex flex-col justify-between items-center bg-red-500 p-4">
          <h1>{'Img.'}</h1>
          <Word word={item.show.split('')} />
        </div>
      </div>
    </>
  )
}