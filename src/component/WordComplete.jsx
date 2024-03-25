import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react"
// import { cat1 } from '../assets/cat1.jpeg'



export function WordComplete({ isState }) {



    const [heragana, setHeragana] = useState([]); //  length : 46
    const [katakana, setKatakana] = useState([]);

    const [heraganaWord, setheraganaWord] = useState(); //  46개 word  | ( word는 중복 X ,  phone는 중복 O)
    const [katakanaWord, setkatakanaWord] = useState([]);

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

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
                setheraganaWord(data.heragana.map(item => item.word))

                // 로딩 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const 셋중하나로변경 = (e) => { // 아... 히라가나밖에 안 되는구나... 들어오는 값이 heragana인지 katakana인지 확인을 해야되면 더 복잡해짐...
    }

    const 클리어함수실행 = () => {


    }

    const 랜덤한값뽑기 = (i) => {
        // 45가 아닌 모든 답을 맞추면 클리어 함수가 실행되도록 해야함. ex) count < 45 이런식으로 
        if (i < 45) {
            setFirstNumber(firstNumber + 1)
            console.log('함수 안', firstNumber)

        } else {
            클리어함수실행();
        }
        //////////////////////////////////////////////////////////////////////////////////////////
        // heragana.word에서 word 값을 랜덤으로 뽑아 다른 word의 값으로 변경한다. 
        // 이때 word의 값은 중복되면 안 된다. 

        // 하나의 state 값으로 모든 값들을 순항할 수 있게 하려면 heraganaWord도 배열이어야 함.. 

        // heraganaWord의 word 의 index와 같은 phone 1개와 나머지 phone 2개를 heragana에서 뽑아서 가져온다. 
        // word의 index를 기준으로 phone의 index가 결정되는 것이다.  
        //////////////////////////////////////////////////////////////////////////////////////////



    }
    console.log('함수 밖'.firstNumber)


    const wordColorChange = (i) => {
        //  {id: 1, word: 'あ', phone: '아[a]', complete: false}
        // item.id는 0 ~ 45
        // console.log("wordColorChange 실행", '\nid :', i)
        // console.log('color change : ', heragana[i])

        // item.complete 값 변경 | josn -> id는 1부터 시작, i의 값은 0부터 시작.
        setHeragana(heragana.filter(item => item.id - 1 === i ? { ...item.complete = true } : item))
    }


    const 인풋밸류변경 = (e) => {

        //////////////////////////////////////////////////////////////////////////////////////////
        // e.target.value의 phone 값 아[a] 이[i] 우[u]의 index의 값과 
        // heraganaWord의 word 값 あ의 index의 값이 같으면 
        // setCount 실행
        // wordColorChange 실행
        //////////////////////////////////////////////////////////////////////////////////////////
        for (let i = 0; i < heragana.length; i++) {

            if (heragana[i].phone === e.target.value) { // phone  ===  아[a] 이[i] 우[u]

                if (heragana[i].word === heraganaWord[firstNumber]) { // あ(클릭한 phone의 word 값) === あ(input,기준)
                    // console.log('heraganaWord :', heraganaWord) // input 값
                    // console.log('clickWord:', heragana[i].word) // 클릭한 phone의 word 값
                    // console.log('heragana[i].phone :', heragana[i].phone) // 클릭한 phone 값

                    // console.log('정답입니다.')
                    setCount(count + 1)
                    wordColorChange(i);
                    랜덤한값뽑기(i);
                } else {
                    console.log('다시 골라주세요.')
                }
            }
        }


    }



    return (
        <div className="w-full flex  justify-around border-2 items-center ">
            <nav className=" relative border-2 h-100%">
                <div className="relative w-60 h-100% my-14">
                    <div className="grid grid-cols-5 border-2 rounded-md  w-full h-full  flex  ">
                        {isState ?
                            heragana.map(item => <p key={item.id} className={`flex justify-center border z-10 opacity-1 ${item.complete ? ('bg-Red-300', 'opacity-10') : 'bg-Slate-200'}`}>{item.word}</p>)
                            :
                            katakana.map(item => <p key={item.id} className={`flex justify-center border z-10 opacity-1 ${item.complete ? ('bg-Red-300', 'opacity-10') : 'bg-Slate-200'}`}>{item.word}</p>)
                        }
                    </div>
                    <img src="../assets/cat1.jpeg" alt="" className={`w-full h-full  absolute rounded-md top-0  z-0 `} />
                </div>
            </nav>

            <form className="border-2 flex flex-col  bg-Teal-100 " onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className="flex py-5 w-60 rounded-xl ">
                    {loading ?
                        <p> Loading...</p>
                        : (
                            <div className="w-full flex justify-around ">
                                <input
                                    type="submit"
                                    name="phone"
                                    value={isState ? heragana[firstNumber].phone : katakana[firstNumber].phone}
                                    className="rounded-xl border-2 w-14 h-8 text-center bg-Red-300 hover:bg-Red-400 caret-transparent cursor-pointer"
                                    onClick={(e) => 인풋밸류변경(e)}
                                />
                                <input
                                    type="submit"
                                    name="phone"
                                    value={isState ? heragana[firstNumber + 1 < 45 ? firstNumber + 1 : Math.floor(firstNumber / 3)].phone : katakana[firstNumber + 1].phone}
                                    className="rounded-xl border-2 w-14 h-8 text-center bg-Red-300 hover:bg-Red-400 caret-transparent cursor-pointer"
                                    onClick={(e) => 인풋밸류변경(e)}
                                />
                                <input
                                    type="submit"
                                    name="phone"
                                    value={isState ? heragana[firstNumber + 2 < 45 ? firstNumber + 2 : Math.floor(firstNumber / 2)].phone : katakana[firstNumber + 2].phone}
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
                            className="px-2 py-1 rounded-md text-center  bg-cyan-500 ring-2 caret-transparent cursor-pointer" >{heraganaWord[firstNumber]}</div>
                    }

                    <span className="border-2 text-center rounded-md text-gray-50 font-mono font-bold">맞춘 개수 : {count}</span>
                </div>
            </form>
        </div >

    )
}
