import TailButton from "../UI/TailButton";

export default function TrafficNav({title, category, sel, setSel}) {
    const handleBtClick = (item) =>{
        setSel(item);
    };

    const bts = category.map(item => 
        <TailButton caption={item} color={item === sel ? "red" : "blue"} key={item} handleClick={() => handleBtClick(item)} />
        );
  return (
    <div className="w-5/6 h-20 flex justify-between items-center
                    bg-slate-600 
                    px-10
                    ">
        <div className="text-white text-xl font-bold">
            교통사고 {title}
        </div>
        <div>
            {bts}
        </div>
      
    </div>
  )
}
