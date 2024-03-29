
export default function BoxOfficeInfo({mov}) {
  return (
    <div className="flex justify-between items-center
                    h-14 text-white font-bold w-4/5 border">          
            <span className="ml-5 text-left">{mov.rank}</span>
            <span className="text-red-500">{mov.movieNm}</span>
            <span className="text-right">
              {parseInt(mov.salesAcc).toLocaleString()}
            </span>
            <span className="text-right">
              {parseInt(mov.audiAcc).toLocaleString()}
            </span>
    </div>
  )
}
