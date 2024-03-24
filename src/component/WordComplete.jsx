import { useEffect, useState } from "react"




export function WordComplete({ isState, wordColorChange }) {


    const [count, setCount] = useState(0);
    const [heragana, setHeragana] = useState([]);
    const [katakana, setKatakana] = useState([]);
    const [heraganaWord, setheraganaWord] = useState('');
    const [katakanaWord, setkatakanaWord] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/assets/heragana.json`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Network response was not ok.');

            }).then(data => {
                setHeragana(data.heragana)
                setKatakana(data.katakana)
                setLoading(false)

                // word만 저장
                const heraganaWord = data.heragana.map(item => item.word)
                const katakanaWord = data.katakana.map(item => item.word)
                setheraganaWord(heraganaWord)
                setkatakanaWord(katakanaWord)

                // 로딩 
                setLoading(false);



            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])


    for (let i = 0; i < heragana.length; i++) {
        setheraganaWord(heragana.map(item => item[i].word))
        setkatakanaWord(heragana.map(item => item[i].word))
    }


    const 인풋밸류변경 = (e) => {

        for (let i = 0; i < heragana.length; i++) {

            if (heragana[i].phone === e.target.value) {
                console.log('word :', heragana[i].word, '\nphone :', heragana[i].phone, '\nid :', heragana[i].id)
                setCount(count + 1)
                // console.log('phone :', heragana[i].phone)
                // console.log('id :', heragana[i].id)
            }
        }
        // console.log("여기서 밸류를 변경한다. 현재의 방식을 따르되 inputWordValue를 지역 변수로 한다음에 value를 바꾸도록 하자. ")
        // console.log("이 단어를 state에 저장해서 단어랑 발음이랑 비교해도 될 거 같다.")
        // wordColorChange();
    }

    const 맞출단어 = () => {
        console.log('맞출 단어 : ')
        console.log("위의 단어(word) 중 발음(phone)이 같은 것을 고른다. 그렇기에 input의 단어 3개 중 하나가 랜덤으로 들어와야한다. ")
    }



    return (
        <div className="w-60 flex flex-col bg-Yellow-300 rounded-xl border-spacing-1 border-2 ">
            <form className="flex-1  m-2 " onSubmit={(e) => {
                e.preventDefault();

                // 인풋밸류변경();
            }}>
                <div className="flex  py-1  rounded-xl ">
                    {loading ?
                        <p> Loading...</p>
                        : (
                            <div className="w-full flex justify-around ">
                                <input
                                    type="submit"
                                    name="phone"
                                    value={isState ? heragana[0].phone : katakana[0].phone}
                                    className="rounded-xl border-2 w-14 h-8 text-center bg-Red-300 hover:bg-Red-400 caret-transparent cursor-pointer"
                                    onClick={(e) => 인풋밸류변경(e)}
                                />
                                <input
                                    type="submit"
                                    name="phone"
                                    value={isState ? heragana[1].phone : katakana[1].phone}
                                    className="rounded-xl border-2 w-14 h-8 text-center bg-Red-300 hover:bg-Red-400 caret-transparent cursor-pointer"
                                    onClick={(e) => 인풋밸류변경(e)}

                                />
                                <input
                                    type="submit"
                                    name="phone"
                                    value={isState ? heragana[2].phone : katakana[2].phone}
                                    className="rounded-xl border-2 w-14 h-8 text-center bg-Red-300 hover:bg-Red-400 caret-transparent cursor-pointer"
                                    onClick={(e) => 인풋밸류변경(e)}

                                />
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-col mt-3 gap-5 justify-center py-2 ">
                    {loading ?
                        <p> Loading...</p>
                        :
                        <div type="" className="px-2 py-1 rounded-md text-center bg-cyan-500 ring-2 cursor-pointer" >{isState ? heragana[2].word : katakana[2].word}</div>
                    }

                    <span className="border-2 text-center rounded-md text-gray-50 font-mono font-bold">맞춘 개수 : {count}</span>
                </div>
            </form>
        </div>

    )
}