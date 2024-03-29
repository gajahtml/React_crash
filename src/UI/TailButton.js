
export default function TailButton({caption, handleClick, color}) {


    const bColorObj = {
        'blue' : 'bg-blue-600',
        'red' : 'bg-red-600',
        'orange' : 'bg-orange-600'
    }
    const hoverColorObj = {        
        'blue' : 'hover:bg-blue-900',
        'red' : 'hover:bg-red-900',
        'orange' : 'hover:bg-orange-900'        
    }
    const bColor = `p-2 m-2 rounded-md
                    w-full
                    ${bColorObj[color]}
                    ${hoverColorObj[color]} text-white`; 

  return (
    <button className={bColor}
            onClick={handleClick}>   
      {caption}
    </button>
  )
}
