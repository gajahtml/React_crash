import { useEffect, useRef, useState } from "react";
import TailButton from "../UI/TailButton";
import TailInput from "../UI/TailInput";

export default function RefInput() {

    const inputRef = useRef();
    const [bts, setBts] = useState([]);
    const [tags, setTags] = useState([]);


    const handleAdd = () => {
        if(inputRef.current.value === ''){
            alert('값을 입력하세요');
            inputRef.current.focus();            
        } else       
            setBts([inputRef.current.value, ...bts]);

    };

    useEffect(() => {
        inputRef.current.value = '';
        inputRef.current.focus();
        let tm = bts.map((item, idx) => 
        <TailButton caption = {item}
        key = {`bt${idx}`}
        color = "orange" />
        );
        setTags(tm);
    }, [bts]);
    
    const handleCancel = () => {
        if(inputRef.current.value === ''){
            alert('값을 입력하세요');
            inputRef.current.focus();
        }
    };

  return (
    <div className="w-11/12 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center
                        w-full bg-slate-500">
            <div className="w-1/2 flex justify-items-center">
              <TailInput type="text"
                        inputRef={inputRef}
                        placeholder="값입력"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                   focus:ring-blue-500 focus:border-blue-500
                                    block w-full p-2.5"
                                    />
            </div>
            <div className="w-1/2 flex justify-items-center">
            <TailButton caption = "등록"
                         color = "blue"
                         handleClick={handleAdd} />
            <TailButton caption = "취소"
                         color = "red"
                         handleClick={handleCancel} />
            </div>
        </div>
        <div className="w-full h-20 
                        border-4 border-gray-500
                        p-5
                        bg-slate-600
                        flex justify-left items-center
                        ">
            {tags}        
        </div>
    </div>
  )
}
