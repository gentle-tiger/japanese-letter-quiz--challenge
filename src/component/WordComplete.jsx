import { useEffect, useState } from "react"




export function WordComplete({ isState }) {

    const [count, setCount] = useState(0);
    const [heragana, setHeragana] = useState([]);
    const [katakana, setKatakana] = useState([]);
    useEffect(() => {
        fetch(`/assets/heragana.json`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Network response was not ok.');

            }).then(data => (
                console.log(data),
                setHeragana(data.heragana),
                setKatakana(data.katakana)
            ))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const 인풋밸류변경 = () => {
        console.log("여기서 밸류를 변경한다. 현재의 방식을 따르되 inputWordValue를 지역 변수로 한다음에 value를 바꾸도록 하자. ")
        console.log("이 단어를 state에 저장해서 단어랑 발음이랑 비교해도 될 거 같다.")
    }

    const 맞출단어 = () => {
        console.log("위의 단어(word) 중 발음(phone)이 같은 것을 고른다. 그렇기에 input의 단어 3개 중 하나가 랜덤으로 들어와야한다. ")
    }


    const inputWordValue = isState ? heragana : katakana

    return (
        <div className="w-60 flex flex-col bg-Yellow-300 rounded-xl border-spacing-1 border-2 ">
            <form className="flex-1  m-2 " onSubmit={() => { console.log('Form Tag') }}>
                <div className="flex  py-1  rounded-xl justify-around">
                    <input type="button" value={inputWordValue[0].word} className="rounded-xl border-2 px-4 bg-Red-300 hover:bg-Red-400 cursor-pointer"></input >
                    <input type="button" value={inputWordValue[1].word} className="rounded-xl border-2 px-4 bg-Red-300 hover:bg-Red-400 cursor-pointer"></input >
                    <input type="button" value={inputWordValue[2].word} className="rounded-xl border-2 px-4 bg-Red-300 hover:bg-Red-400 cursor-pointer"></input >
                </div>
                <div className="flex justify-center py-2 ">
                    <div onClick={맞출단어} className="px-2 py-1 rounded-md text-center bg-cyan-500 ring-2 cursor-pointer" >단어</div>
                </div>
                <span className="">{count}</span>
            </form>
        </div>

    )
}