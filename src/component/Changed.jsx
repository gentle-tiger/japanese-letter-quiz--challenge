

export function Changed({ isState, modeChange }) {
    return (
        <div className=" text-sm  fixed right-1 top-10">
            {
                isState ?
                    <button className="font-bold bg-Sky-500 rounded-md" onClick={modeChange}>가타카나 게임하기</button> :

                    <button className="font-bold bg-Red-500 rounded-md" onClick={modeChange}>히라가나 게임하기</button>

            }
        </div>
    )
}