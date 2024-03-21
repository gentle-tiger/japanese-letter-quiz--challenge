import { useEffect, useState } from "react"




export function WordComplete({ isState, wordColorChange }) {


    const [count, setCount] = useState(0);
    const [heragana, setHeragana] = useState([]);
    const [katakana, setKatakana] = useState([]);
    const [loading, setLoading] = useState(true);

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
                setKatakana(data.katakana),
                setLoading(false)
            ))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])


    const 인풋밸류변경 = () => {

        console.log("여기서 밸류를 변경한다. 현재의 방식을 따르되 inputWordValue를 지역 변수로 한다음에 value를 바꾸도록 하자. ")
        console.log("이 단어를 state에 저장해서 단어랑 발음이랑 비교해도 될 거 같다.")
        wordColorChange();
    }

    const 맞출단어 = () => {
        console.log("위의 단어(word) 중 발음(phone)이 같은 것을 고른다. 그렇기에 input의 단어 3개 중 하나가 랜덤으로 들어와야한다. ")
    }



    return (
        <div className="w-60 flex flex-col bg-Yellow-300 rounded-xl border-spacing-1 border-2 ">
            <form className="flex-1  m-2 " onSubmit={(e) => {
                e.preventDefault();
                console.log('Form Tag')
                console.log(e.target.value)
                인풋밸류변경();


            }}>
                <div className="flex  py-1  rounded-xl ">
                    {loading ?
                        <p> Loading...</p>
                        : (
                            <div className="w-full flex justify-around ">
                                <input type="submit" name="word" value={isState ? heragana[0].word : katakana[0].word} className="rounded-xl border-2 w-10 text-center bg-Red-300 hover:bg-Red-400 caret-transparent cursor-pointer"></input >
                                <input type="submit" name="word" value={isState ? heragana[1].word : katakana[1].word} className="rounded-xl border-2 w-10 text-center bg-Red-300 hover:bg-Red-400 caret-transparent cursor-pointer"></input >
                                <input type="submit" name="word" value={isState ? heragana[2].word : katakana[2].word} className="rounded-xl border-2 w-10 text-center bg-Red-300 hover:bg-Red-400 caret-transparent cursor-pointer"></input >
                            </div>
                        )
                    }
                </div>
                <div className="flex justify-center py-2 ">
                    <div type="" className="px-2 py-1 rounded-md text-center bg-cyan-500 ring-2 cursor-pointer" >발음</div>
                </div>
                <span className="">{count}</span>
            </form>
        </div>

    )
}