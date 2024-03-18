import React, { useEffect, useState } from "react"
// import WordItem from "./WordItem";
// import { heraganaData } from "./date/heragana";
// import { katakanaData } from "./date/katakana";
import { Changed } from "./component/Changed";
import { WordComplete } from "./component/WordComplete";
import { data } from './assets/heragana.json'


function App() {
  const [isState, serState] = useState(true);
  const [heragana, setHeragana] = useState([]);
  const [katakana, setKatakana] = useState([]);




  const modeChange = () => {
    serState(isState => !isState);
  }


  useEffect(() => {
    fetch('/assets/heragana.json')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw res;
      })
      .then(data => {
        // 히라가나 데이터 가져오기
        setHeragana(data.heraganaData)
        // 가타카나 데이터 가져오기
        setKatakana(data.katakanaData)
        console.log("heragana", heragana)

        // 필요한 작업 수행
      })
  }, [])

  // const randomWord = () => {
  //   if (isState) {
  //     return heragana.forEach(item => item.word)
  //   }
  //   return katakana.forEach(item => item.word)
  // }

  return (
    <div>
      <body className="flex w-full bg-Stone-400 flex-row justify-center ">
        {/* 제목 */}
        <h1 className="text-2xl font-bold ">
          {
            isState ?
              <div>ひらがな(히라가나) 외우기 게임</div> :
              <div>カタカナ(가타카나) 외우기 게임</div>
          }
        </h1>
        {/* 게임 전환 버튼 */}
        <Changed isState={isState} modeChange={modeChange} />
      </body>
      {/* body */}
      <header className="w-full  flex  justify-center items-center bg-Gray-300 gap-10">
        {/* 히라가나 가타카나 표 */}
        <nav className="">
          <div className="grid grid-cols-5 border-2 rounded-md w-60 flex ">
            {isState ?
              heragana.map(item => <p key={item.id} className="flex justify-center border">{item.word}</p>) :
              katakana.map(item => <p key={item.id} className="flex justify-center border">{item.word}</p>)

            }
          </div>
        </nav>
        {/* 단어 맞추기 */}
        <WordComplete />

      </header>
      <footer> </footer>
    </div >
  );
} export default App;
