import Counter from "./Counter";

export default function Card({ title, image, price, handleClick, count, id}) {

    return (
        <li className="border p-3 w-64 h-100 flex flex-col place-content-between rounded-2xl bg-white">
            <div>
                <img src={image} alt={title} className="w-3xs aspect-square rounded-2xl"/>
                <p>{title}</p>
            </div>
            <div>
                <Counter handleClick={handleClick} count={count} id={id} />
                <p className=" text-right">${price}</p>
            </div>
        </li>
    )
}