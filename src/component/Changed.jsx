

export function Changed({ isState, modeChange }) {
    return (
        <div className=" relative text-sm">
            {
                isState ?
                    <button className="font-bold border-2 rounded-md" onClick={modeChange}>가타카나 게임하기</button> :

                    <button className="font-bold border-2 rounded-md" onClick={modeChange}>히라가나 게임하기</button>

            }
        </div>
    )
}