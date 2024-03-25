import React, { useEffect, useState } from "react"
import { ChangedBtn } from "./component/ChangedBtn";
import { WordComplete } from "./component/WordComplete";


function App() {
  const [isState, serState] = useState(true);
  const [heragana, setHeragana] = useState([]);
  const [katakana, setKatakana] = useState([]);




  const modeChange = () => {
    serState(isState => !isState);
  }

  useEffect(() => {
    fetch(`./assets/heragana.json`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Network response was not ok.');

      })
      .then(data => {
        setHeragana(data.heragana)
        setKatakana(data.katakana)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [])


  // const randomWord = () => {
  //   if (isState) {
  //     return heragana.forEach(item => item.word)
  //   }
  //   return katakana.forEach(item => item.word)
  // }

  return (
    <div className="flex flex-col ">
      <body className="flex w-full bg-Sky-400 py-2 flex-row justify-center flex-1">
        {/* 제목 */}
        <h1 className="text-2xl font-bold mt-5 ">
          {
            isState ?
              <div>ひらがな(히라가나) 외우기 게임</div> :
              // <img src="/assets/가타카나.jpg"></img> :
              // <img src="/assets/가타카나.jpg"></img>
              <div>カタカナ(가타카나) 외우기 게임</div>
          }
        </h1>
      </body>
      {/* 게임 전환 버튼 */}
      <ChangedBtn isState={isState} modeChange={modeChange} />
      {/* body */}
      <header className="w-full  flex  bg-Sky-500 ">
        {/* 히라가나 가타카나 표,  단어 맞추기 */}
        <WordComplete isState={isState} />

      </header>
      <footer className="flex flex-1"> </footer>
    </div >
  );
} export default App;
