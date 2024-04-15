

export const CountCarro = ({item, handleAumentar, handleDecrementar}) => {

    return (
        <>
            <div className="cantidad d-flex gap-3">
                <button className="btn btn-primary" onClick={() => {handleDecrementar(item.id)}}>-</button>
                {item.quantitat}
                <button className="btn btn-primary" onClick={() => {handleAumentar(item.id)}}>+</button>
            </div>
        </>
    )
}