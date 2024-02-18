import React, { useState } from "react"
import WordItem from "./WordItem";
import { heraganaData } from "./heragana";
import { katakanaData } from "./katakana";



function App() {
  const [isState, serState] = useState(true);

  const modeChange = () => {
    serState(isState => !isState);
  }

  const heragana = heraganaData.map(item => new WordItem(item.id, item.word, item.phone, item.complete));
  const katakana = katakanaData.map(item => new WordItem(item.id, item.word, item.phone, item.complete));

  // const randomWord = () => {
  //   if (isState) {
  //     return heragana.forEach(item => item.word)
  //   }
  //   return katakana.forEach(item => item.word)
  // }

  const randomWord = isState ? "heragana" : "katakana";
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
        <div className=" text-sm  fixed right-1 top-10">
          {
            isState ?
              // <button className="background-Orange" onClick={modeChange}>가타카나</button> :
              <button className="font-bold bg-Sky-500 rounded-md" onClick={modeChange}>가타카나 게임하기</button> :

              <button className="font-bold bg-Red-500 rounded-md" onClick={modeChange}>히라가나 게임하기</button>

          }
        </div>
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
        <div className="w-60 h-40 flex flex-col rounded-sm border-spacing-1 bg-Slate-500 ">
          <div className="w-full flex justify-center items-center gap-1 bg-Red-700">
            <div className=" flex-1 border-2">1{randomWord}</div>
            <div className=" flex-1 border-2">2</div>
            <div className=" flex-1 border-2">3</div>
          </div>
          <div className="border-2 h-auto" >단어</div>
        </div>

      </header>
      <footer> </footer>
    </div >
  );
} export default App;
