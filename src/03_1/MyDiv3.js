
export default function MyDiv3({d1, d2, d3}) {
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
        {`${d1} > ${d2} > ${d3}`}
      </p>
    </div>
  )
}
