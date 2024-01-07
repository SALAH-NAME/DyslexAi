
export default function Word({ word }) {
	
	return (
	  <>
		{
			word.map((letter, index) => {
				return (
					<h1 className="w-[92px] h-[136px] text-blue-950 text-5xl bg-yellow-50 rounded-[29px] border border-black flex items-center justify-center">
						{letter}
					</h1>
				)
			})
		}
	  </>
	)
  }