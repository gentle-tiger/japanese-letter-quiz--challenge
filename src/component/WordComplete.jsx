import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react"




export function WordComplete({ isState, wordColorChange }) {


    const [count, setCount] = useState(0);
    const [heragana, setHeragana] = useState([]); //lehgth : 46
    const [katakana, setKatakana] = useState([]);
    const [heraganaWord, setheraganaWord] = useState(); // 46개 word  |  word는 중복되면 안 되지만 phone는 중복되어도 됨.  
    const [katakanaWord, setkatakanaWord] = useState([]);
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
                // const heraganaWord = data.heragana.map(item => item.word)
                // const katakanaWord = data.katakana.map(item => item.word)
                setheraganaWord('あ')
                // setkatakanaWord(katakanaWord)
                // console.log(heraganaWord)
                // console.log(katakanaWord)
                // 로딩 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])
    const 셋중하나로변경 = (e) => { // 아... 히라가나밖에 안 되는구나... 들어오는 값이 heragana인지 katakana인지 확인을 해야되면 더 복잡해짐...
        // console.log('heraganaWord :', heraganaWord[3])
    }

    // word는 중복되면 안됨. 
    // 저장하는 데이터의 값은 e.target.value의 3개의 값 중 하나여야 함. 
    // gameWord[i] : heragana or katakana 둘 중 하나 단어 배열을 순회하면서 e.target.value와 일치하는 값임. e.target.value와 동일한 값이 나오게 됨 
    // e.target.value : 내가 클랙한 단어 (아[a] 이[i] 우[u])
    const arr = [...Array(46).keys()]
    // console.log(arr)

    const 인풋밸류변경 = (e) => {
        for (let i = 0; i < heragana.length; i++) {
            if (heragana[i].phone === e.target.value) {
                console.log('heragana[i].id :', heragana[i].id) // heragana 배열의 id는 1부터 시작. 
                if (heragana[i].word === heraganaWord) {
                    console.log('heraganaWord :', heraganaWord)
                    console.log('heragana[i].word :', heragana[i].word)
                    console.log('heragana[i].phone :', heragana[i].phone)
                    setCount(count + 1)
                    console.log('정답입니다.')
                    wordColorChange();
                } else {
                    console.log('다시 골라주세요.')
                }
            }
        }
        // setting
        // const gameWord = isState ? heragana : katakana;
        // const heraganaWord = heragana.map(item => item.word)
        //최댓값은 제외, 최솟값은 포함  | 그런데 한 번 나온 번호는 나오면 안 되는데 
        // console.log(e.target.value, '밸류')
        // console.log(heraganaWord[0] === e.target.value)

        //////////////////////////////////////////////////////////////////////////////////////////
        // e.target.value의 phone 값 아[a] 이[i] 우[u]의 index의 값과 
        // heraganaWord의 word 값 あ의 index의 값이 같으면 
        // count의 값을 +1 해주고 
        // heraganaWord의 word 값을 랜덤으로 뽑아 다른 word의 값으로 변경한다. 
        // 이때 word의 값은 중복되면 안 된다. 
        // heraganaWord의 word 의 index와 같은 phone 1개와 나머지 phone 2개를 heragana에서 뽑아서 가져온다. 
        // word의 index를 기준으로 phone의 index가 결정되는 것이다.  
        //////////////////////////////////////////////////////////////////////////////////////////


        // for (let i = 0; i < heragana.length; i++) {
        //     if (heraganaWord[i] === e.target.value) {
        //         console.log('true입니다. ')
        //         console.log(e.target.value, '밸류')
        //         const min = Math.ceil(0);
        //         const max = Math.floor(46);
        //         const random = Math.floor(Math.random() * (max - min)) + min
        //         const heraganaWord = heragana.map(item => item.phone)
        //         setheraganaWord(heraganaWord[random])
        //         break
        //         // console.log('word :', [i].word, '\nphone :', gameWord[i].phone, '\nid :', gameWord[i].id)
        //         // console.log('인풋밸류변경 :', gameWord[i].word)
        //         // gameWord.filter(item => item !== gameWord[i].word) // 현재 
        //     } else {
        //         console.log('false 입니다. ')

    }



    // if ('e에 들어오는 phone의 값과' > 'div 태그에 들어오는 word의 값을 비교해야함. ') {
    //     // div 태그에 들어가는 word의 값을 특정할 수 있어야 비교가 가능함. word state에 46개의 데이터 중 하나를 저장해야함. 
    //     setCount(count + 1) // 맞다면 count를 + 1
    // }


    // console.log("여기서 밸류를 변경한다. 현재의 방식을 따르되 inputWordValue를 지역 변수로 한다음에 value를 바꾸도록 하자. ")
    // console.log("이 단어를 state에 저장해서 단어랑 발음이랑 비교해도 될 거 같다.")
    // wordColorChange();


    const 단어모음 = () => {

        console.log('맞출 단어 : ')
        console.log("위의 단어(word) 중 발음(phone)이 같은 것을 고른다. 그렇기에 input의 단어 3개 중 하나가 랜덤으로 들어와야한다. ")
    }

    // w-full  flex flex-2  justify-center items-center bg-Sky-500 gap-10 
    // w-60 flex flex-col bg-Yellow-300 rounded-xl border-spacing-1 border-2
    // grid grid-cols-5 border-2 rounded-md w-60 h-auto my-10 flex bg-Orange-400 
    return (
        <div className="w-full flex justify-around border-2 items-center ">
            <nav className="">
                <div className="grid grid-cols-5 border-2 rounded-md w-60 h-auto my-10 flex bg-Orange-400">

                    {isState ?
                        heragana.map(item => <p key={item.id} className="flex justify-center border">{item.word}</p>) :
                        katakana.map(item => <p key={item.id} className="flex justify-center border">{item.word}</p>)

                    }
                </div>
            </nav>

            <form className="border-2 flex flex-col  bg-Teal-100 " onSubmit={(e) => {
                e.preventDefault();

                // 인풋밸류변경();
            }}>
                <div className="flex py-5 w-60 rounded-xl ">
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
                        <div
                            type="submit"
                            name="word"
                            value={isState ? heragana[2].word : katakana[2].word}
                            className="px-2 py-1 rounded-md text-center  bg-cyan-500 ring-2 caret-transparent cursor-pointer" >{heraganaWord}</div>
                    }

                    <span className="border-2 text-center rounded-md text-gray-50 font-mono font-bold">맞춘 개수 : {count}</span>
                </div>
            </form>
        </div>

    )
}
