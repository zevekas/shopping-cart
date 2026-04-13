export default function Counter({ handleClick, count, id }) {


    return (
        <div className="flex place-content-between items-center mx-8 my-2 border-gray-900 border rounded-4xl bg-gray-100">
            <button id="remove" className="bg-gray-300 p-2 rounded-4xl aspect-square w-10 hover:bg-gray-400" onClick={() => handleClick('remove', id)}>-</button>
            <p>{count.get(id) || 0}</p>
            <button id="add" className="bg-gray-300 p-2 rounded-4xl aspect-square w-10 hover:bg-gray-400" onClick={() => handleClick('add', id)}>+</button>
        </div>
    )
}