import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getCode from './getcode.json';
import TailSelect from "../UI/TailSelect";

export default function FrcstList() {
  const [queryParams] = useSearchParams();
  const dt = queryParams.get("dt");
  const area = queryParams.get("area");
  const x = queryParams.get("x");
  const y = queryParams.get("y");
  const gubun = queryParams.get("gubun");

  // console.log(dt, area, x, y, gubun);

  const [fcstDt, setfcstDt] = useState();
  const [tags, setTags] = useState();
  const [selItem, setSelItem] = useState();
  const [selItemName, setSelItemName] = useState();

  const ops = getCode
    .filter((item) => item["예보구분"] === gubun)
    .map((item) => `${item["항목명"]}[${item["항목값"]}]`);

  const itemRef = useRef();

  const handleItem = () => {
    if (itemRef.current.value === "" || itemRef.current.value === undefined) {
      alert("항목을 선택하세요");
      itemRef.current.focus();
      return;
    }

    setSelItemName(itemRef.current.value.split("[")[0]);
    setSelItem(itemRef.current.value.split("[")[1].replace("]", ""));
    console.log(selItem);
    console.log(selItemName);
  };

  const getData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setfcstDt(data.response.body.items.item);
  };

  useEffect(() => {
    let g = '';
    
    if(gubun === '단기예보') g = 'getVilageFcst'
    else g = 'getUltraSrtFcst';

    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${g}`;
    url = url + `?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=1000&dataType=json`;
    url = url + `&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
    console.log(url);
    getData(url);

  }, [gubun,dt,x,y]);

  useEffect(() => {
    if (!fcstDt) return;

    let tmp = fcstDt
      .filter((item) => item["category"] === selItem)
      .map((item) => (
        <tr key={item.fcstDate + item.fcstTime} className="bg-white border-b hover:bg-gray-50">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {selItemName}
          </th>
          <td className="px-6 py-4">{`${item["fcstDate"].substr(0, 4)}/${item["fcstDate"].substr(4, 2)}/${item[
            "fcstDate"
          ].substr(6, 2)}`}</td>
          <td className="px-6 py-4">{`${item["fcstTime"].substr(0, 2)} : ${item["fcstTime"].substr(2, 2)}`}</td>
          <td className="px-6 py-4">{item["fcstValue"]}</td>
        </tr>
      ));

    setTags(tmp);
  }, [selItem]);

  return (
    <div className="w-3/5 h-full pt-20">
      <div className="w/full flex justify-between mb-10">
        <p className="text-xl text-white font-bold">
          {`${area} ${gubun} (${dt.substring(0, 4)}/${dt.substring(4, 6)}/${dt.substring(6, 8)})`}
        </p>
        <TailSelect ops={ops} opDefault="선택" selRef={itemRef} handleSel={handleItem} />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3">
              항목명
            </th>
            <th scope="col" className="px-6 py-3">
              예측일자
            </th>
            <th scope="col" className="px-6 py-3">
              예측시간
            </th>
            <th scope="col" className="px-6 py-3">
              예측값
            </th>
          </tr>
        </thead>
        <tbody>{tags}</tbody>
      </table>
    </div>
  );
}
