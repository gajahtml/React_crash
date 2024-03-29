
export default function TailInput({type, inputRef, handleChange, ph}) {

  return (
    <input type={type}
            ref={inputRef}
            onChange={handleChange}             
            placeholder={ph}
            className="w-30 h-10 rounded-md " />
  )
}
