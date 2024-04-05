import Recoil2 from "./Recoil2";
import { useRecoilValue } from "recoil";
import { rcnt } from "./RecoilAtom";

export default function Recoil() {
  
  const cnt = useRecoilValue(rcnt);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center
                    text-center text-2xl text-white font-bold">
      Recoil : {cnt}
      <Recoil2 />
      
    </div>
  )
}
