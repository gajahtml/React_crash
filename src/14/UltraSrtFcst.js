import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TailSelect from "../UI/TailSelect";
import getCode from "./getcode.json";

export default function UltraSrtFcst() {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const [ultraDt, setUltraDt] = useState();
  const [tags, setTags] = useState();
  const [selItem, setSelItem] = useState();
  const [selItemName, setSelItemName] = useState();

  const gubun = "초단기예보";

  const ops = getCode
    .filter((item) => item["예보구분"] === gubun)
    .map((item) => `${item["항목명"]}(${item["항목값"]})`);

  const itemRef = useRef();

  const handleItem = () => {
    if(itemRef.current.value === ''){
      alert('항목을 선택하세요');
      itemRef.current.focus();
      return;
    }

    setSelItemName(itemRef.current.value.split('(')[0]);
    setSelItem(itemRef.current.value.split('(')[1].replace(')', ''));
    console.log(selItem);
    console.log(selItemName);
    // let tmp = ultraDt
    //   .filter((item) => item["category"] === itemRef.current.value)
    //   .map((item) => 
    //     <tr class="bg-white border-b hover:bg-gray-50">
    //       <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //         {item["category"]}
    //       </th>
    //       <td class="px-6 py-4">{`${item["fcstDate"].substr(0, 4)}/${item["fcstDate"].substr(4, 2)}/${item[
    //         "fcstDate"
    //       ].substr(6, 2)}`}</td>
    //       <td class="px-6 py-4">{`${item["fcstTime"].substr(0, 2)} : ${item["fcstTime"].substr(2, 2)}`}</td>
    //       <td class="px-6 py-4">{item["fcstValue"]}</td>
    //     </tr>
    //   );

    //   setTags(tmp);
  };

  // console.log(dt, area, x, y);

  const getData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setUltraDt(data.response.body.items.item);

    // fetch(url)
    //   .then((resp) => resp.json())
    //   .then((data) => setUltraDt(data.response.body.items.item))
    //   .then((err) => console.log(err));
  };

  useEffect(() => {
    let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";
    url = url + `?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=1000&dataType=json`;
    url = url + `&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
    console.log(url);
    getData(url);
  }, []);

  useEffect(() => {
    if (!ultraDt) return;

    let tmp = ultraDt.filter(item => item['category'] === selItem).map((item) => (
      <tr key={item.fcstDate + item.fcstTime} class="bg-white border-b hover:bg-gray-50">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {selItemName}
        </th>
        <td class="px-6 py-4">{`${item["fcstDate"].substr(0, 4)}/${item["fcstDate"].substr(4, 2)}/${item[
          "fcstDate"
        ].substr(6, 2)}`}</td>
        <td class="px-6 py-4">{`${item["fcstTime"].substr(0, 2)} : ${item["fcstTime"].substr(2, 2)}`}</td>
        <td class="px-6 py-4">{item["fcstValue"]}</td>
      </tr>
    ));

    console.log();
    setTags(tmp);

  }, [selItem]);

  return (
    <div class="w-3/5 h-auto mt-5">
      <div className="w/full flex justify-between mb-10">
        <p className="text-xl text-white font-bold">
          {`${area} ${gubun} (${dt.substring(0, 4)}/${dt.substring(4, 6)}/${dt.substring(6, 8)})`}
        </p>
        <TailSelect ops={ops} opDefault="선택" selRef={itemRef} handleSel={handleItem} />
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-sm text-gray-700 uppercase bg-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3">
              항목명
            </th>
            <th scope="col" class="px-6 py-3">
              예측일자
            </th>
            <th scope="col" class="px-6 py-3">
              예측시간
            </th>
            <th scope="col" class="px-6 py-3">
              예측값
            </th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
    </div>
  );
}
