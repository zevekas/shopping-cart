import { Link } from "react-router"

export default function Header({ count }) {
    const sum = count.values().reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="bg-blue-950 shadow-md flex justify-between text-white">
            <h1 className="self-center font-medium ml-3">Stuff Shop</h1>
            <div className="flex gap-5 mr-3 my-2">
                <button className="my-2 transform transition ease-in-out duration-200 hover:-translate-y-px"><Link to="/">Home</Link></button>
                <button className="my-2 transform transition ease-in-out duration-200 hover:-translate-y-px"><Link to="/shop">Shop</Link></button>
                <button className="my-2 transform transition ease-in-out duration-200 hover:-translate-y-px">
                    <Link to="/cart">
                        <div className="flex gap-2">
                            <p>Cart</p>
                            <div className="bg-white rounded-md text-blue-950 px-2">
                                {sum}
                            </div>
                        </div>
                    </Link>
                </button>
            </div>
        </div>
    )
}