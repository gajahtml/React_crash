export default function BoxOfficeTbody({ mList, setMov }) {
  const handleClick = (i) => {
    setMov(i);
  };

  const movLists = mList.map((item) => (
    <tr
      onClick={() => handleClick(item)}
      key={item.movieCd}
      className="text-red-300"
    >
      <td>{item.rank}</td>
      <td>{item.movieNm}</td>
      <td>{item.salesAcc}</td>
      <td>{item.audiAcc}</td>
      <td>{item.rankInten}</td>
    </tr>
  ));

  return (
    <tbody>{movLists}</tbody>
  )
}
