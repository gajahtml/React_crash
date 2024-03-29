
export default function MyDiv3(probs) {
  return (
    <div
      className="flex flex-col justify-center items-center
                 w-3/5 h-2/4 bg-lime-400
                 text-white
                 ">
      <p className="w-4/5 flex justify-center
                    font-bold text-2xl
                    pt-10
                    ">
        {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
      </p>
    </div>
  )
}
