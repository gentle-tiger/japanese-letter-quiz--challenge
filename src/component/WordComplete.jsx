import { useEffect, useState } from "react"




export function WordComplete() {

    const [count, setCount] = useState(0);



    return (
        <div className="w-60 h-40 flex flex-col rounded-sm border-spacing-1 bg-Slate-500 ">
            <form className="flex-1 border-2" onSubmit={() => { }}>
                <div className="w-full flex  bg-Red-300">
                    <input type="button" value={'a'} className=" flex-1 "></input >
                    <input type="button" value={'b'} className=" flex-1 "></input >
                    <input type="button" value={'c'} className=" flex-1 "></input >
                </div>
                <div className="border-2 h-auto" >단어</div>

            </form>
            <span className="">{count}</span>
        </div>

    )
}