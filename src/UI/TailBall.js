export default function TailBall({ n }) {
  const bColor = [
    "bg-red-800",
    "bg-orange-800",
    "bg-lime-800",
    "bg-blue-800",
    "bg-green-800",
  ];

  const ballColor = `w-16 h-16 mx-2
                       flex justify-center items-center
                       ${bColor[parseInt(n / 10)]} text-white text-2xl font-bold
                       rounded-full`;
  return <div className={ballColor}>{n}</div>;
}
