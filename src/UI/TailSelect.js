
export default function TailSelect({ops, opDefault, selRef, handleSel}) {
    const opTags = ops.map((item) => 
        <option key={item} value={item}>
          {item}
        </option>
    );

  return (
    <select id="sel"
            onChange={handleSel}
            ref={selRef}
            className="w-2/5 flex justify-start text-center border-2 border-gray-200 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          >
            <option value='' defaultValue>{opDefault}</option>
            {opTags}
          </select>
  )
}
