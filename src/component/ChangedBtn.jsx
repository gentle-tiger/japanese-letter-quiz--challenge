

export function ChangedBtn({ isState, modeChange }) {
    return (
        <div className="flex justify-end text-sm bg-Sky-300">
            {
                isState ?
                    <button className="font-bold rounded-md ring-2 ring-white bg-Slate-50 focus:bg-Slate-400 " onClick={modeChange}>가타카나 게임하기</button> :

                    <button className="font-bold rounded-md ring-2 ring-white bg-Slate-50 focus:bg-Slate-400 " onClick={modeChange}>히라가나 게임하기</button>

            }
        </div>
    )
}