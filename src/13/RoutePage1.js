import { useParams } from "react-router-dom";

export default function RoutePage1() {
    const item = useParams().item;
  return (
    <div className="text-white">
      Route Page1 : {item}
    </div>
  )
}
